"use client";

import Input from "@/components/Input";
import { ProfileLayout } from "../page";
import { Pencil } from "lucide-react";
import { FormProvider } from "react-hook-form";
import Button from "@/components/Button";
import { useRegister } from "./hooks/useRegister";
import { ProfileFields } from "./forms/profileForm";
import { useEffect } from "react";

export default function ProfileRegisterData() {
  const { methods, user, updateProfile } = useRegister();

  useEffect(() => {
    if (!user) return;

    methods.setValue(ProfileFields.Name, user.contact.name);
    methods.setValue(ProfileFields.Surname, user.contact.surname);
  }, [user]);

  return (
    <ProfileLayout>
      <div className="text-7xl w-40 h-40 bg-slate-200 flex justify-center items-center rounded-full mb-8 text-zinc-800 relative select-none border border-slate-300">
        <div className="absolute right-0 bottom-6 p-2 rounded-full bg-white cursor-pointer">
          <Pencil size={16} className="" />
        </div>
      </div>
      <div className="flex gap-20">
        <form
          className="flex gap-4 flex-col w-72"
          onSubmit={methods.handleSubmit(updateProfile, (err) => {
            console.log("Error:", err);
          })}
        >
          <input {...methods.register(ProfileFields.Name)} />
          <input {...methods.register(ProfileFields.Surname)} />
          <input value={user?.email} disabled />
          {/* <Input label="Nome" {...methods.register(ProfileFields.Name)} />
          <Input label="Sobrenome" name={ProfileFields.Surname} />
          <Input label="Email" name={ProfileFields.Email} /> */}
          <Button rounded="md" className="self-end mt-4">
            Salvar
          </Button>
        </form>
        <form className="flex flex-col gap-4  w-72">
          <Input
            type="password"
            label="Senha atual"
            placeholder="Digite aqui"
          />
          <Input type="password" label="Nova senha" placeholder="Digite aqui" />
          <Input
            type="password"
            label="Repita a senha"
            placeholder="Digite aqui"
          />
          <Button rounded="md" className="self-end mt-4">
            Alterar
          </Button>
        </form>
      </div>
    </ProfileLayout>
  );
}
