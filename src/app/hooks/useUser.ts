import { userStore } from "@/store/user-store";

export default function useUser() {
  const { user, setUser } = userStore();

  return { user, setUser };
}
