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
import { userStore } from "@/store/user-store";
import { redirect } from "next/navigation";
import EditRegister from "../components/EditRegister";
import { GetSelfDataOutput } from "@/api/user/output/get-self-data-output";
import { UserApi } from "@/api/user/user.api";
import EditPassword from "../components/EditPassword";

export default async function ProfileRegisterData() {
  let user: GetSelfDataOutput;

  try {
    const { data } = await UserApi.getSelfData();

    user = data;
  } catch {
    redirect("/login");
  }

  return (
    <ProfileLayout>
      <div className="text-7xl w-40 h-40 bg-slate-200 flex justify-center items-center rounded-full mb-8 text-zinc-800 relative select-none border border-slate-300">
        <div className="absolute right-0 bottom-6 p-2 rounded-full bg-white cursor-pointer">
          <Pencil size={16} className="" />
        </div>
      </div>
      <div className="flex gap-20">
        <EditRegister user={user} />
        <EditPassword />
      </div>
    </ProfileLayout>
  );
}
