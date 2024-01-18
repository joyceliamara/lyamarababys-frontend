"use client";

import { useState } from "react";
import { Edit, Heart, Package, ShoppingBag, User2 } from "lucide-react";
import logo from "../../assets/images/header/logo.png";
import anchor from "../../assets/images/header/anchor.png";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function MyAccount() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="flex h-screen">
      <div className="w-72 p-3 border-r">
        <div className="flex m-2 justify-center">
          <Image className="inline w-[80%] lg:w-[80%]" src={logo} alt="" />
          <Image className="inline w-4 ml-2" src={anchor} alt="" />
        </div>
        <ul className="flex flex-col gap-5 mt-12 m-2">
          <li className="flex gap-2 text-white bg-[#7C969D] px-4 py-2 rounded-md">
            <User2 />
            Minha conta
          </li>
          <li className="flex gap-2  text-[#7C969D] px-4 py-2 rounded-md">
            <Package />
            Meus pedidos
          </li>
        </ul>
      </div>
      <div className="flex-1 overflow-y-scroll py-10 px-7">
        <div className="flex justify-between">
          <b className="text-2xl">Minha Conta</b>
          <div className="flex gap-5">
            <ShoppingBag />
            <Heart />
          </div>
        </div>
        {!editing && (
          <div className="mt-6">
            <div className="flex items-end gap-4">
              <b className="text-xl">Informações</b>
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setEditing(true)}
              >
                Editar
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex gap-4 max-w-lg">
                <div className="flex-1">
                  <b className="text-sm">NOME</b>
                  <span className="block">Lucas Henrique</span>
                </div>
                <div className="flex-1">
                  <b className="text-sm">SOBRENOME</b>
                  <span className="block">Cabral de Souza</span>
                </div>
              </div>
              <div className="flex gap-4 max-w-lg">
                <div className="flex-1">
                  <b className="text-sm">DATA DE NASCIMENTO</b>
                  <span className="block">Lucas Henrique</span>
                </div>
                <div className="flex-1">
                  <b className="text-sm">TELEFONE</b>
                  <span className="block">Cabral de Souza</span>
                </div>
              </div>
              <div className="flex gap-4 max-w-lg">
                <div className="flex-1">
                  <b className="text-sm">EMAIL</b>
                  <span className="block">lucascabral@email.com</span>
                </div>
                <div className="flex-1">
                  <b className="text-sm">CPF</b>
                  <span className="block">Lucas Henrique</span>
                </div>
              </div>
            </div>
            {/* todo: precisa alterar o endereço para ser uma lista de endereços */}
            <div className="mt-10">
              <b className="text-xl">Endereços</b>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <span>Rua A, nº 10 - Cidade A - Estado A - 22222-222</span>
                <div className="flex gap-3 text-blue-300">
                  <Link href="">Editar</Link>
                  <Link href="">Excluir</Link>
                </div>
              </div>
              <div>
                <span>Rua A, nº 10 - Cidade A - Estado A - 22222-222</span>
                <div className="flex gap-3 text-blue-300">
                  <Link href="">Definir como principal</Link>
                  <Link href="">Editar</Link>
                  <Link href="">Excluir</Link>
                </div>
              </div>
              <div>
                <span>Rua A, nº 10 - Cidade A - Estado A - 22222-222</span>
                <div className="flex gap-3 text-blue-300">
                  <Link href="">Definir como principal</Link>
                  <Link href="">Editar</Link>
                  <Link href="">Excluir</Link>
                </div>
              </div>
              <div>
                <span>Rua A, nº 10 - Cidade A - Estado A - 22222-222</span>
                <div className="flex gap-3 text-blue-300">
                  <Link href="">Definir como principal</Link>
                  <Link href="">Editar</Link>
                  <Link href="">Excluir</Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {editing && (
          <form className="flex flex-col gap-4 mt-4">
            <div className="flex gap-x-16">
              <Input
                label="Nome"
                placeholder="Digite seu nome"
                id="password"
                variant="filled"
                className="mt-2 flex-1"
                type="text"
              />
              <Input
                label="Sobrenome"
                placeholder="Digite seu sobrenome"
                id="password"
                variant="filled"
                className="mt-2 flex-1"
                type="text"
              />
            </div>
            <div className="flex gap-x-16">
              <Input
                label="DATA DE NASCIMENTO"
                placeholder="Digite sua data de nascimento"
                id="password"
                variant="filled"
                className="mt-2 flex-1"
                type="text"
              />
              <Input
                label="TELEFONE"
                placeholder="Digite seu telefone"
                id="password"
                variant="filled"
                className="mt-2 flex-1"
                type="text"
              />
            </div>
            <div className="flex gap-x-16">
              <Input
                label="EMAIL"
                placeholder="Digite seu e-mail"
                id="password"
                variant="filled"
                className="mt-2 flex-1"
                type="text"
              />
              {/* todo: adicionar mascara no cpf */}
              <Input
                label="CPF"
                placeholder="Digite seu cpf"
                id="password"
                variant="filled"
                className="mt-2 flex-1"
                type="text"
              />
            </div>

            <div className="flex justify-end gap-6">
              <Button
                variant="neutra"
                rounded="md"
                className="my-4"
                type="button"
                onClick={() => setEditing(false)}
              >
                CANCELAR
              </Button>
              <Button variant="primary" rounded="md" className="my-4">
                SALVAR
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
