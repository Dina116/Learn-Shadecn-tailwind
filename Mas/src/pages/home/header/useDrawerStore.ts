import create from "zustand";

type DrawerStore = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const useDrawerStore = create<DrawerStore>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}));
