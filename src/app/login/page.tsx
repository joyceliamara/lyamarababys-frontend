"use client";

import Image from "next/image";
import anchor from "../../assets/images/login/anchor.png";
import logo from "../../assets/images/login/logo.png";
import { DM_Serif_Display } from "next/font/google";
import { FormEvent, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { useLogin } from "./hooks/useLogin";
import TextField from "@/components/TextField";
import { Form } from "@/components/ui/form";
import { LoginFields } from "./forms/login-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Login() {
  const { error, methods, checkRemember, onSubmit } = useLogin();
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <div className="flex">
      <div className="flex flex-1 h-screen bg-gradient-to-b from-[#EEB8BC] to-[#7C969D] max-md:hidden">
        <span className="flex flex-col px-2 m-auto">
          <Image className="m-auto w-[20%]" src={anchor} alt="" />

          <Image className="mt-8" src={logo} alt="" />
        </span>
      </div>
      <div className="from-[#EEB8BC] to-[#7C969D] flex flex-1 m-auto justify-center text-[#7C7C7C] h-screen max-md:bg-gradient-to-b">
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
          <Form {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit, console.log)}
              className=""
            >
              <div className="flex flex-col mt-6 gap-4">
                <TextField
                  name={LoginFields.Email}
                  label="Email"
                  placeholder="Digite seu email"
                />
                <TextField
                  type="password"
                  name={LoginFields.Password}
                  label="Password"
                  placeholder="Digite sua senha"
                />
              </div>
              {error && <p className="mt-2 text-red-500">{error}</p>}
              <div className="flex justify-between mt-8">
                <div className="flex gap-2 items-center">
                  <Checkbox id={LoginFields.Remember} onClick={checkRemember} />
                  <label htmlFor={LoginFields.Remember}>Lembre-se de mim</label>
                </div>
                {!isMobile && (
                  <span className="cursor-pointer">Esqueceu sua senha?</span>
                )}
              </div>
              <div className="flex flex-col items-center mt-6">
                <Button className="max-md:w-full">Entrar</Button>
                {isMobile && (
                  <span className="cursor-pointer mt-2">
                    Esqueceu sua senha?
                  </span>
                )}
                <div className="mt-6">
                  <span className="">Não possui conta?</span>
                  <Link
                    href="/register"
                    className="ml-2 border-b-2 border-[#7C7C7C] cursor-pointer"
                  >
                    Crie agora
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
