import { useForm } from "react-hook-form";
import { defaultValues, resolver } from "../forms/register-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserApi } from "@/api/user/user.api";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export default function useRegister() {
  const router = useRouter();
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(resolver),
  });

  const handleSubmit = methods.handleSubmit(async (input) => {
    try {
      await UserApi.register(input);

      router.replace("/");
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Erro ao registrar",
      });
    }
  });

  return { methods, handleSubmit };
}
