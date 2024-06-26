"use client";

import { Edit, Plus, X } from "lucide-react";
import { useState } from "react";
import Input from "@/components/Input";
import Dialog from "@/components/Dialog";
import Button from "@/components/Button";
import { useAddress } from "../../hooks/useAddress";
import { ModalMode, useAddressModal } from "../../hooks/useAddressModal";
import { AddressOutput } from "@/api/user/output/address-output";

export default function ListAddresses(props: ListAddressesProps) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toDeleteId, setToDeleteId] = useState<string | undefined>();
  const { fetchAddress } = useAddress();
  const {
    addresses,
    modalActive,
    editAddress,
    newAddress,
    formData,
    onChangeFormData,
    onSubmit,
    deleteAddress,
    setMainAddress,
    ...addressModal
  } = useAddressModal({
    addresses: props.addresses,
  });

  const onDelete = () => {
    setToDeleteId(undefined);
    setDeleteDialog(false);
    fetchAddress();
  };

  return (
    <>
      <h1 className="text-xl font-bold flex gap-4 items-center">
        Endereços{" "}
        <button
          className="hover:bg-white p-2 rounded-full"
          onClick={newAddress}
        >
          <Plus size="18" />
        </button>
      </h1>
      <ul className="flex flex-col gap-4 mt-8">
        {addresses.map((i, index) => (
          <li
            key={index}
            className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md"
          >
            <div className="flex flex-col">
              <span>
                {i.street}, {i.number} - {i.neighborhood}
              </span>
              <span>
                {i.city} - {i.state}, {i.cep}
              </span>
              {!i.main && (
                <span
                  className="text-blue-500 cursor-pointer mt-2 w-fit"
                  onClick={() => setMainAddress(i.id)}
                >
                  Definir como principal
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Edit
                size={18}
                className="cursor-pointer text-zinc-700"
                onClick={() => editAddress(i)}
              />
              {!i.main && (
                <X
                  size={18}
                  className="cursor-pointer text-red-700"
                  onClick={() => {
                    setDeleteDialog(true);
                    setToDeleteId(i.id);
                  }}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      {modalActive && (
        <Dialog
          onClose={addressModal.onClose}
          title={
            addressModal.mode === ModalMode.Edit
              ? "Editar endereço"
              : "Cadastrar novo endereço"
          }
        >
          <form
            className="flex flex-col gap-2"
            onSubmit={(e) => onSubmit(e, fetchAddress)}
          >
            <Input
              placeholder="Endereço"
              defaultValue={formData.street}
              name="street"
              onChange={onChangeFormData}
            />
            <div className="flex gap-2">
              <Input
                placeholder="Número"
                defaultValue={formData.number}
                className="w-1/5"
                name="number"
                onChange={onChangeFormData}
              />
              <Input
                placeholder="Bairro"
                defaultValue={formData.neighborhood}
                className="flex-1"
                name="neighborhood"
                onChange={onChangeFormData}
              />
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="CEP"
                defaultValue={formData.cep}
                className="w-1/5"
                name="cep"
                onChange={onChangeFormData}
              />
              <Input
                placeholder="Cidade"
                defaultValue={formData.city}
                className="flex-1"
                name="city"
                onChange={onChangeFormData}
              />
              <Input
                placeholder="UF"
                defaultValue={formData.state}
                className="w-1/12"
                name="state"
                onChange={onChangeFormData}
              />
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="bg-green-500 text-white">Salvar</Button>
              <Button className="bg-red-500 text-white" onClick={() => {}}>
                Cancelar
              </Button>
            </div>
          </form>
        </Dialog>
      )}
      {deleteDialog && (
        <Dialog onClose={() => setDeleteDialog(false)}>
          Tem certeza que deseja deletar?
          <div className="flex gap-2 mt-4">
            <Button className="bg-green-500 text-white">Manter</Button>
            <Button
              className="bg-red-500 text-white"
              onClick={() => deleteAddress(toDeleteId as string, onDelete)}
            >
              Excluir
            </Button>
          </div>
        </Dialog>
      )}
    </>
  );
}

type ListAddressesProps = {
  addresses: AddressOutput;
};
