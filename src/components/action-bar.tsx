import { useFormSpec } from "@/hooks/use-form-spec";
import { BrushCleaning, ListPlus, Type } from "lucide-react";

export function ActionBar() {
  const { clearSpec, addTextInput, addSelect, addDemo } = useFormSpec();

  return (
    <div className="ml-auto flex gap-2">
      <button
        type="button"
        onClick={addTextInput}
        title="Insert TEXT_INPUT"
        className="text-xs px-2 py-1 rounded-full border border-[#a1cf0c] hover:text-[#a1cf0c] inline-flex items-center gap-1"
      >
        <Type className="w-3.5 h-3.5" /> + TEXT_INPUT
      </button>
      <button
        type="button"
        onClick={addSelect}
        title="Insert SELECT"
        className="text-xs px-2 py-1 rounded-full border border-[#a1cf0c] hover:text-[#a1cf0c] inline-flex items-center gap-1"
      >
        <ListPlus className="w-3.5 h-3.5" /> + SELECT
      </button>
      <button
        type="button"
        onClick={addDemo}
        title="Insert 2×2 demo"
        className="text-xs px-2 py-1 rounded-full border border-[#a1cf0c] hover:text-[#a1cf0c]"
      >
        + 2×2 Demo
      </button>
      <button
        type="button"
        onClick={clearSpec}
        title="Clear specifications"
        className="flex items-center text-xs px-2 py-1 rounded-full border border-red-400 hover:text-[#a1cf0c]"
      >
        <BrushCleaning className="mr-1 w-4 h-4" />
        Clear
      </button>
    </div>
  );
}
