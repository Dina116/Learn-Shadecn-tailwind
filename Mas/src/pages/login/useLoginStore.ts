import create from "zustand";
import type { LoginState } from "./types";

export const useLoginStore = create<LoginState>((set) => ({
  data: null,
  handleLogin: (formData) => {
    set({ data: formData });
    console.log("Login data submitted:", formData);
  },
}));
