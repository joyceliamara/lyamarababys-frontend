"use client";

import Image from "next/image";
import anchor from "../../assets/images/login/anchor.png";
import logo from "../../assets/images/login/logo.png";
import { DM_Serif_Display } from "next/font/google";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import { FormEvent, useState, useEffect } from "react";
import Link from "next/link";
import api from "@/services/api";
import { AxiosError, isAxiosError } from "axios";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Login() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
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

    try {
      const { data } = await api.post("user/auth", { email, password });

      if (remember) {
        localStorage.setItem(
          "@lyamarababys-token",
          JSON.stringify({
            value: data.token,
            expiresInTimestamp: null,
          })
        );
      } else {
        localStorage.setItem(
          "@lyamarababys-token",
          JSON.stringify({
            value: data.token,
            expiresInTimestamp: new Date().setDate(new Date().getDate() + 1),
          })
        );
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      window.location.replace("/");
    } catch (err: any) {
      if (!isAxiosError(err)) {
        console.log("error", err);
      }

      const { data } = err.response;

      switch (data.path[0]) {
        case "email":
          setErrorMessage("Usuário não encontrado");
          break;
        case "password":
          setErrorMessage("Senha inválida");
          break;
        default:
          setErrorMessage(data.message);
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
              Bem vindo,
            </b>
            <p className="text-sm">Faça seu login!</p>
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
                type="password"
                id="password"
                className="mt-2"
                variant={isMobile ? "lightning" : "default"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              {/* adicionar uma animação de loading */}
              <Button
                rounded={isMobile ? "md" : "xl"}
                variant={isMobile ? "mono" : "neutra"}
                className="max-md:w-full"
              >
                Entrar
              </Button>
              {isMobile && (
                <span className="cursor-pointer mt-2">Esqueceu sua senha?</span>
              )}
              <div className="mt-6">
                <span className="">Não possui conta?</span>
                <Link
                  href="/"
                  className="ml-2 border-b-2 border-[#7C7C7C] cursor-pointer"
                >
                  Crie agora
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
