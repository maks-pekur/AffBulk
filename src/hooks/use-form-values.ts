import type { FormValues } from "@/types";
import { create } from "zustand";

type State = {
  values: FormValues;
};
type Actions = {
  setValue: (id: string, v: string) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useFormValues = create<State & Actions>()((set) => ({
  values: {},
  setValue: (id, v) => set((s) => ({ values: { ...s.values, [id]: v } })),
  remove: (id) =>
    set((s) => {
      const next = { ...s.values };
      delete next[id];
      return { values: next };
    }),
  clear: () => set({ values: {} }),
}));
