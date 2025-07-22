import { create } from "zustand";

interface UserState {
  login: boolean;
  setLogin: (login: boolean) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  login: false,
  setLogin: (login) => set({ login }),
}));
