import { AuthApi } from "@/api/auth/auth.api";
import { LoginInput } from "@/api/auth/input/login-input";
import User from "@/entities/user";
import Sentry from "@/services/sentry";
import { userStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginDefaultValues, loginSchema } from "../forms/login-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";

export const useLogin = () => {
  const router = useRouter();
  const methods = useForm({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(loginSchema),
  });
  const [error, setError] = useState<string | undefined>();
  const { setUser } = userStore();

  const checkRemember = () => {
    methods.setValue("remember", !methods.getValues("remember"));
  };

  const onSubmit = async (input: LoginInput) => {
    try {
      const { data } = await AuthApi.login(input);

      setUser(
        new User({
          email: data.email,
          id: data.id,
          name: data.contact.name,
          surname: data.contact.surname,
        })
      );

      router.replace("/");
    } catch (err) {
      if (!isAxiosError(err)) {
        console.log(err);
        Sentry.captureException(err);
        return;
      }

      const data: { message: string; path: (string | number)[] } =
        err.response!.data;

      if (data.path[0] === "email") {
        methods.setError("email", { message: "Usuário não encontrado" });
      } else if (data.path[0] === "password") {
        methods.setError("password", { message: "Senha inválida" });
      }
    }
  };

  return {
    error,
    methods,
    checkRemember,
    onSubmit,
  };
};

type Input = LoginInput & {
  remember?: boolean;
};
