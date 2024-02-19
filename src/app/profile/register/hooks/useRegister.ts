import { useForm } from "react-hook-form";
import {
  ProfileFormData,
  defaultValues,
  profileResolver,
} from "../forms/profileForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { UserApi } from "@/api/user/user.api";
import Sentry from "@/services/sentry";
import { GetSelfDataOutput } from "@/api/user/output/get-self-data-output";

export const useRegister = () => {
  const [user, setUser] = useState<GetSelfDataOutput | undefined>();
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(profileResolver),
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await UserApi.getSelfData();

        setUser(data);
      } catch (err) {
        Sentry.captureException(err);
      }
    })();
  }, []);

  const updateProfile = async (data: ProfileFormData) => {
    if (!user) return;

    try {
      await UserApi.updateProfile({
        ...data,
        bornDate: user.contact.bornDate,
        cpf: user.contact.cpf,
        phone: user.contact.phone,
      });
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  return { methods, user, updateProfile };
};
