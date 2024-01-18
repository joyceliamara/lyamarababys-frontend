import Input from "@/components/Input";
import { ProfileLayout } from "../page";

export default function ProfileRegisterData() {
  return (
    <ProfileLayout>
      <div className="flex items-center">
        <span className="w-60">Nome</span>
        <div className="flex-1">
          <Input className="min-w-sm max-w-sm" value="John" />
        </div>
      </div>
      <div className="flex items-center">
        <span className="w-60">Sobrenome</span>
        <div className="flex-1">
          <Input className="min-w-sm max-w-sm" value="Doe da Silva" />
        </div>
      </div>
      <div className="flex items-center">
        <span className="w-60">Email</span>
        <div className="flex-1">
          <Input className="min-w-sm max-w-sm" value="johndoe@email.com" />
        </div>
      </div>
    </ProfileLayout>
  );
}
