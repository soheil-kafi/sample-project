import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  login: boolean;
  setLogin: (login: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  login: false,
  setLogin: (login) => set({ login }),
}));
