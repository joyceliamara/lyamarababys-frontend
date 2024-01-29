import Input from "@/components/Input";
import { ProfileLayout } from "../page";
import { Pencil } from "lucide-react";
import Button from "@/components/Button";

export default function ProfileRegisterData() {
  return (
    <ProfileLayout>
      <div className="text-7xl w-40 h-40 bg-slate-200 flex justify-center items-center rounded-full mb-8 text-zinc-800 relative select-none border border-slate-300">
        J
        <div className="absolute right-0 bottom-6 p-2 rounded-full bg-white cursor-pointer">
          <Pencil size={16} className="" />
        </div>
      </div>
      <div className="flex gap-20">
        <form className="flex gap-4 flex-col w-72">
          <Input label="Nome" value="John" />
          <Input label="Sobrenome" value="Doe da Silva" />
          <Input label="Email" value="johndoe@email.com" />
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
