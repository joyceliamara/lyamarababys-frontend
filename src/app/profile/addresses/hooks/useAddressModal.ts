import { AddressOutput } from "@/api/user/output/address-output";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Address, addressSchema } from "../form/address-schema";
import { UserApi } from "@/api/user/user.api";

const initialFormData: Address = {
  street: "",
  cep: "",
  city: "",
  neighborhood: "",
  number: "",
  state: "",
};

export const useAddressModal = (props: AddressProps) => {
  const [addresses, setAddresses] = useState<AddressOutput>(
    props.addresses ?? []
  );
  const [target, setTarget] = useState<AddressOutput[0] | undefined>();
  const [formData, setFormData] = useState<Address>(initialFormData);
  const [error, setError] = useState<string | undefined>();
  const [modalActive, setModalActive] = useState(false);
  const [mode, setMode] = useState<ModalMode | undefined>();

  const editAddress = (address: AddressOutput[0]) => {
    setTarget(address);
    setFormData({
      street: address.street,
      cep: address.cep,
      city: address.city,
      neighborhood: address.neighborhood,
      state: address.state,
      number: address.number,
    });
    setModalActive(true);
    setMode(ModalMode.Edit);
  };

  const newAddress = () => {
    setModalActive(true);
    setFormData(initialFormData);
    setMode(ModalMode.Create);
  };

  const onClose = () => {
    setTarget(undefined);
    setModalActive(false);
    setMode(undefined);
    setFormData(initialFormData);
  };

  const onChangeFormData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (
    e: FormEvent<HTMLFormElement>,
    callback?: Function
  ) => {
    e.preventDefault();

    const validation = addressSchema.safeParse(formData);

    if (validation.success === false) {
      setError(validation.error.issues[0].message);
      return;
    }

    try {
      const result =
        mode === ModalMode.Create
          ? await UserApi.addAddress(validation.data)
          : await UserApi.updateAddress(target?.id as string, validation.data);

      onClose();
      setAddresses((prev) =>
        mode === ModalMode.Create
          ? [...prev, result.data]
          : prev.map((address) =>
              address.id === result.data.id ? result.data : address
            )
      );

      if (callback) callback();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAddress = async (addressId: string, callback?: Function) => {
    try {
      await UserApi.deleteAddress(addressId);

      setAddresses((prev) =>
        prev.filter((address) => address.id !== addressId)
      );

      if (callback) callback();
    } catch (err) {
      console.log(err);
    }
  };

  const setMainAddress = async (addressId: string) => {
    try {
      await UserApi.setMainAddress(addressId);

      setAddresses((prev) =>
        prev
          .map((address) =>
            address.id === addressId
              ? { ...address, main: true }
              : { ...address, main: false }
          )
          .sort((a, b) => (a.main ? -1 : b.main ? 1 : 0))
      );
    } catch (err) {
      console.log(err);
    }
  };

  return {
    addresses,
    modalActive,
    editAddress,
    newAddress,
    target,
    onClose,
    mode,
    formData,
    onChangeFormData,
    onSubmit,
    deleteAddress,
    setMainAddress,
  };
};

type AddressProps = {
  addresses: AddressOutput;
};

export enum ModalMode {
  Edit = "edit",
  Create = "create",
}
