import { AuthApi } from "@/api/auth/auth.api";
import { LoginInput } from "@/api/auth/input/login-input";
import request from "@/api/request";
import User from "@/entities/user";
import Sentry from "@/services/sentry";
import { userStore } from "@/store/user-store";
import Token from "@/utils/token";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();
  const { setUser } = userStore();

  const login = async (input: Input): Promise<string | void> => {
    setError(undefined);

    try {
      const { data } = await AuthApi.login(input);

      setUser(
        new User({
          email: data.email,
          id: data.id,
          name: data.contact.name,
        })
      );

      router.replace("/");

      return;
    } catch (err: any) {
      const { data } = err.response;

      switch (data.path[0]) {
        case "email":
          setError("Usuário não encontrado");
          break;
        case "password":
          setError("Senha inválida");
          break;
        default:
          Sentry.captureException(err);
          setError(data.message);
          break;
      }
    }
  };

  return {
    login,
    error,
  };
};

type Input = LoginInput & {
  remember?: boolean;
};
