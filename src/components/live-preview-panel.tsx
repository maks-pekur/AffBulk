import { FormElementDrawer } from "@/components/form-element-drawer";
import { useFormValues } from "@/hooks/use-form-values";
import type { FormElement } from "@/types";

export function LivePreviewPanel({ elements }: { elements: FormElement[] }) {
  const { values, clear } = useFormValues();

  const has = elements.length > 0;

  const handleSubmit = () => {
    alert("Submitted!\n" + JSON.stringify(values, null, 2));
  };

  return (
    <div className="flex flex-col h-full p-6 space-y-4 rounded-xl bg-[hsl(78,88%,43%)]/5">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#a1cf0c]">Live Preview</h2>
        <p className="text-sm text-muted-foreground">
          {has
            ? `Rendering ${elements.length} form element${
                elements.length !== 1 ? "s" : ""
              }`
            : "Type your specifications to see the form here instantly"}
        </p>
      </div>

      <div className="h-full flex flex-col bg-[#050505] p-4 rounded-2xl">
        <FormElementDrawer elements={elements} />

        {has && (
          <div className="flex gap-3 pt-8 mt-auto ml-auto">
            <button
              onClick={clear}
              className="flex items-center gap-2 rounded-xl border border-[#a1cf0c] px-4 py-2 hover:bg-[#a1cf0c] hover:text-black"
            >
              Clear fields
            </button>
            <button
              onClick={handleSubmit}
              className="rounded-xl bg-[#a1cf0c] text-black px-4 py-2 hover:bg-[#a1cf0c]/80 hover:text-white"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
