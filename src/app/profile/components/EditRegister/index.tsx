"use client";

import { Form } from "@/components/ui/form";
import { useRegister } from "../../register/hooks/useRegister";
import TextField from "@/components/TextField";
import { ProfileFields } from "../../register/forms/profileForm";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { userStore } from "@/store/user-store";
import { GetSelfDataOutput } from "@/api/user/output/get-self-data-output";
import { Button } from "@/components/ui/button";

export default function EditRegister({ user }: EditRegisterProps) {
  const {
    methods,
    updateProfile,
    loading: loadingRegister,
  } = useRegister({ user });

  return (
    <Form {...methods}>
      <form
        className="flex gap-4 flex-col w-72"
        onSubmit={methods.handleSubmit(updateProfile, (err) => {})}
      >
        <TextField name={ProfileFields.Name} placeholder="Nome" />
        <TextField name={ProfileFields.Surname} placeholder="Sobrenome" />
        <Input value={user?.email} disabled />
        <Button className="self-end mt-4 bg-slate-600 hover:bg-slate-600">
          {loadingRegister ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Salvando
            </>
          ) : (
            "Salvar"
          )}
        </Button>
      </form>
    </Form>
  );
}

type EditRegisterProps = {
  user: GetSelfDataOutput;
};
