import { AuthApi } from "@/api/auth/auth.api";
import { LoginInput } from "@/api/auth/input/login-input";
import request from "@/api/request";
import Sentry from "@/services/sentry";
import Token from "@/utils/token";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>();

  const login = async (input: Input): Promise<string | void> => {
    setError(undefined);

    try {
      const { data } = await AuthApi.login(input);

      if (input.remember) {
        Token.set(data.token);
      } else {
        const expiresInTimestamp = new Date().setDate(new Date().getDate() + 1);

        Token.set(data.token, expiresInTimestamp);
      }

      request.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
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
