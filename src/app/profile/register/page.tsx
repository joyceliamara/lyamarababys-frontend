import { Pencil } from "lucide-react";
import { FormProvider } from "react-hook-form";
import { useRegister } from "./hooks/useRegister";
import { ProfileFields } from "./forms/profileForm";
import { useEffect } from "react";
import TextField from "@/components/TextField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import ProfileLayout from "../components/ProfileLayout";

export default function ProfileRegisterData() {
  return <ProfileLayout></ProfileLayout>;

  // const {
  //   methods,
  //   user,
  //   updateProfile,
  //   loading: loadingRegister,
  // } = useRegister();

  // useEffect(() => {
  //   if (!user) return;

  //   methods.setValue(ProfileFields.Name, user.contact.name);
  //   methods.setValue(ProfileFields.Surname, user.contact.surname);
  // }, [user]);

  // return (
  //   <ProfileLayout>
  //     <div className="text-7xl w-40 h-40 bg-slate-200 flex justify-center items-center rounded-full mb-8 text-zinc-800 relative select-none border border-slate-300">
  //       <div className="absolute right-0 bottom-6 p-2 rounded-full bg-white cursor-pointer">
  //         <Pencil size={16} className="" />
  //       </div>
  //     </div>
  //     <div className="flex gap-20">
  //       <Form {...methods}>
  //         <form
  //           className="flex gap-4 flex-col w-72"
  //           onSubmit={methods.handleSubmit(updateProfile, (err) => {
  //             console.log("Error:", err);
  //           })}
  //         >
  //           <TextField name={ProfileFields.Name} placeholder="Nome" />
  //           <TextField name={ProfileFields.Surname} placeholder="Sobrenome" />
  //           <Input value={user?.email} disabled />
  //           <Button className="self-end mt-4 bg-slate-600 hover:bg-slate-600">
  //             {loadingRegister ? (
  //               <>
  //                 <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
  //                 Salvando
  //               </>
  //             ) : (
  //               "Salvar"
  //             )}
  //           </Button>
  //         </form>
  //       </Form>
  //       <form className="flex flex-col gap-4  w-72">
  //         <Input type="password" placeholder="Senha atual" />
  //         <Input type="password" placeholder="Nova senha" />
  //         <Input type="password" placeholder="Repita a senha" />
  //         <Button className="self-end mt-4 bg-slate-600 hover:bg-slate-600">
  //           Alterar
  //         </Button>
  //       </form>
  //     </div>
  //   </ProfileLayout>
  // );
}
