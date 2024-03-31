import { useForm } from "react-hook-form";
import {
  ProfileFormData,
  defaultValues,
  profileResolver,
} from "../forms/profileForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { UserApi } from "@/api/user/user.api";
import Sentry from "@/services/sentry";
import { GetSelfDataOutput } from "@/api/user/output/get-self-data-output";
import { userStore } from "@/store/user-store";
import User from "@/entities/user";

export const useRegister = ({ user }: UseRegisterProps) => {
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    defaultValues: {
      ...defaultValues,
      name: user?.contact.name,
      surname: user?.contact.surname,
    } as ProfileFormData,
    resolver: zodResolver(profileResolver),
  });
  const { setUser } = userStore();

  const updateProfile = async (data: ProfileFormData) => {
    if (!user) return;

    setLoading(true);

    try {
      await UserApi.updateProfile({
        ...data,
        bornDate: user.contact.bornDate,
        cpf: user.contact.cpf,
        phone: user.contact.phone,
      });

      setUser(
        new User({
          email: user.email,
          id: user.id,
          name: data.name,
          surname: data.surname,
        })
      );
    } catch (err) {
      Sentry.captureException(err);
    } finally {
      setLoading(false);
    }
  };

  return { methods, user, updateProfile, loading };
};

type UseRegisterProps = {
  user: GetSelfDataOutput;
};
