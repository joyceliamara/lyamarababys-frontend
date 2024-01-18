"use client";

import { ProfileLayout } from "../page";
import { Edit, Plus, X } from "lucide-react";
import { useState } from "react";
import Input from "@/components/Input";
import Dialog from "@/components/Dialog";
import Button from "@/components/Button";

interface Address {
  address: string;
  number: number;
  neighborhood: string;
  city: string;
  uf: string;
  cep: string;
}

export default function ProfileAddresses() {
  const [addresses, setAddresses] = useState<Address[]>(
    Array(5).fill({
      address: "Rua Barão de Amazonas",
      number: 300,
      neighborhood: "Centro",
      city: "Campos dos Goytacazes",
      uf: "RJ",
      cep: "28080135",
    })
  );
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [mode, setMode] = useState<"edit" | "new">("edit");
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [focusedAddress, setFocusedAddress] = useState<Address | undefined>(
    undefined
  );

  return (
    <ProfileLayout>
      <h1 className="text-xl font-bold flex gap-4 items-center">
        Endereços{" "}
        <button
          className="hover:bg-white p-2 rounded-full"
          onClick={() => {
            setFocusedAddress({} as any);
            setShowEditDialog(true);
            setMode("new");
          }}
        >
          <Plus size="18" />
        </button>
      </h1>
      <ul className="flex flex-col gap-4 mt-8">
        {addresses.map((i, index) => (
          <li
            key={index}
            className="flex gap-3 justify-between items-center text-sm max-w-sm bg-white rounded-md py-2 px-4 shadow-md"
          >
            <div className="flex flex-col">
              <span>
                {i.address}, {i.number} - {i.neighborhood}
              </span>
              <span>
                {i.city} - {i.uf}, {i.cep}
              </span>
              {index !== 0 && (
                <span className="text-blue-500 cursor-pointer mt-2 w-fit">
                  Definir como principal
                </span>
              )}
            </div>
            <div className="flex gap-2">
              <Edit
                size={18}
                className="cursor-pointer text-zinc-700"
                onClick={() => {
                  setFocusedAddress(i);
                  setShowEditDialog(true);
                  setMode("edit");
                }}
              />
              <X
                size={18}
                className="cursor-pointer text-red-700"
                onClick={() => setDeleteDialog(true)}
              />
            </div>
          </li>
        ))}
      </ul>
      {showEditDialog && focusedAddress && (
        <Dialog
          onClose={() => setShowEditDialog(false)}
          title={
            mode === "edit" ? "Editar endereço" : "Cadastrar novo endereço"
          }
        >
          <form className="flex flex-col gap-2">
            <Input placeholder="Endereço" value={focusedAddress.address} />
            <div className="flex gap-2">
              <Input
                placeholder="Número"
                value={focusedAddress.number}
                className="w-1/5"
              />
              <Input
                placeholder="Bairro"
                value={focusedAddress.neighborhood}
                className="flex-1"
              />
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="CEP"
                value={focusedAddress.cep}
                className="w-1/5"
              />
              <Input
                placeholder="Cidade"
                value={focusedAddress.city}
                className="flex-1"
              />
              <Input
                placeholder="RJ"
                value={focusedAddress.uf}
                className="w-1/12"
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
            <Button className="bg-red-500 text-white" onClick={() => {}}>
              Excluir
            </Button>
          </div>
        </Dialog>
      )}
    </ProfileLayout>
  );
}
