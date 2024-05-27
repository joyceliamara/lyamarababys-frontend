import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditPassword() {
  return (
    <form className="flex flex-col gap-4  w-72">
      <Input type="password" placeholder="Senha atual" />
      <Input type="password" placeholder="Nova senha" />
      <Input type="password" placeholder="Repita a senha" />
      <Button className="self-end mt-4 bg-slate-600 hover:bg-slate-600">
        Alterar
      </Button>
    </form>
  );
}
