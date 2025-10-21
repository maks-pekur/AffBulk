import { DEFAULT_ELEMENTS } from "@/lib/constants";
import { trimJoin } from "@/utils";
import { create } from "zustand";

type State = {
  input: string;
};

type Actions = {
  setInput: (v: string) => void;
  clearSpec: () => void;
  appendLine: (line: string) => void;
  addTextInput: () => void;
  addSelect: () => void;
  addDemo: () => void;
};

export const useFormSpec = create<State & Actions>()((set, get) => ({
  input: "",
  setInput: (v) => set({ input: v }),
  clearSpec: () => set({ input: "" }),
  appendLine: (line) => set((s) => ({ input: trimJoin(s.input, line) })),
  addTextInput: () => get().appendLine("1;1;Name;TEXT_INPUT;Enter your name"),
  addSelect: () => get().appendLine("1;2;Gender;SELECT;Male,Female,Other"),
  addDemo: () => get().appendLine(DEFAULT_ELEMENTS.join("\n")),
}));
