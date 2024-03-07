import Image from "next/image";
import anchor from "../../assets/images/login/anchor.png";
import logo from "../../assets/images/login/logo.png";
import { DM_Serif_Display } from "next/font/google";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { FormEvent, useState, useLayoutEffect } from "react";
import Link from "next/link";
import api from "@/services/api";
import { isAxiosError } from "axios";
import validateEmail from "@/utils/validate-email";
import Token from "@/utils/token";
import { useRouter } from "next/navigation";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Register() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState(false);

  useLayoutEffect(() => {
    const handleScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleScreen);

    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    if (!validateEmail(email)) {
      setErrorMessage("O email informado é inválido");
      return;
    } else if (password !== rPassword) {
      setErrorMessage("As senhas não coincidem");
      return;
    } else if (password.length < 6) {
      setErrorMessage("A senha deve ter mais que 6 dígitos");
      return;
    } else if (password.length > 255) {
      setErrorMessage("A senha deve ter menos que 256 caracteres");
      return;
    }

    try {
      const { data } = await api.post("user", { email, password });

      if (remember) {
        Token.set(data.token);
      } else {
        const expiresInTimestamp = new Date().setDate(new Date().getDate() + 1);

        Token.set(data.token, expiresInTimestamp);
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      router.replace("/");
    } catch (err: any) {
      if (!isAxiosError(err)) {
        console.log("error", err);
      }

      const { data } = err.response;

      console.log(data);

      if (data.statusCode === 422 && typeof data.message === "string") {
        setErrorMessage("Usuário com email informado já existe");

        return;
      }

      const { path, message } = data.message[0];

      switch (path[0]) {
        case "email":
          setErrorMessage("Email inválido");
          break;
        case "password":
          setErrorMessage("Senha inválida");
          break;
        default:
          setErrorMessage(message);
          break;
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-1 h-screen bg-gradient-to-b from-[#EEB8BC] to-[#7C969D] max-md:hidden">
        <span className="flex flex-col px-2 m-auto">
          <Image className="m-auto w-[20%]" src={anchor} alt="" />

          <Image className="mt-8" src={logo} alt="" />
        </span>
      </div>
      <div className="from-[#EEB8BC] to-[#7C969D] flex flex-1 m-auto justify-center text-[#7C7C7C] h-screen max-md:bg-gradient-to-b max-md:text-white">
        <div className="flex flex-col w-full max-w-md mx-4 h-full justify-center">
          <div className="flex flex-col">
            <b
              className="text-4xl text-[#303030] max-md:text-white"
              style={dmSerifDisplay.style}
            >
              Crie sua conta,
            </b>
            <p className="text-sm">Faça seu cadastro!</p>
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col mt-6 max-md:gap-2">
              <Input
                label={!isMobile ? "Email" : undefined}
                placeholder="Digite seu email"
                id="email"
                variant={isMobile ? "lightning" : "default"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={!isMobile ? "Senha" : undefined}
                placeholder="Digite sua senha"
                id="password"
                className="mt-2"
                variant={isMobile ? "lightning" : "default"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label={!isMobile ? "Confirmar senha" : undefined}
                placeholder="Confirmar senha"
                id="password"
                className="mt-2"
                variant={isMobile ? "lightning" : "default"}
                type="password"
                value={rPassword}
                onChange={(e) => setRPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="mt-2 text-red-500">{errorMessage}</p>
            )}
            <div className="flex justify-between mt-8">
              <div className="flex gap-2">
                <Checkbox
                  color={isMobile ? "white" : "#B0B0B0"}
                  iconColor="black"
                  onTap={() => setRemember((prev) => !prev)}
                />
                <span>Lembre-se de mim</span>
              </div>
              {!isMobile && (
                <span className="cursor-pointer">Esqueceu sua senha?</span>
              )}
            </div>
            <div className="flex flex-col items-center mt-6">
              <Button
                rounded={isMobile ? "md" : "xl"}
                variant={isMobile ? "mono" : "neutra"}
                className="max-md:w-full"
              >
                Cadastrar
              </Button>
              {isMobile && (
                <span className="cursor-pointer mt-2">Esqueceu sua senha?</span>
              )}
              <div className="mt-6">
                <span className="">Já possui conta?</span>
                <Link
                  href="/"
                  className="ml-2 border-b-2 border-[#7C7C7C] cursor-pointer"
                >
                  Faça o login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
