import User from "@/entities/user";
import { create } from "zustand";

export const userStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: undefined }),
}));

type UserStore = {
  user?: User;
  setUser: (user: User) => void;
};
