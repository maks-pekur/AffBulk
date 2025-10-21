import { useFormSpec } from "@/hooks/use-form-spec";

export function SpecEditor({ placeholder }: { placeholder?: string }) {
  const { input, setInput } = useFormSpec();

  return (
    <div className="p-6 space-y-4 rounded-xl bg-[hsl(78,88%,43%)]/5">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[#a1cf0c]">
          Input Specifications
        </h2>
        <p className="text-sm text-muted-foreground">
          Enter form element specifications (one per line)
        </p>
      </div>

      <textarea
        id="spec"
        aria-label="Input specifications"
        autoCorrect="off"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
        className="min-h-[300px] w-full rounded-xl border p-3 font-mono text-sm focus:outline-none focus:ring placeholder:text-gray-500 border-white/50"
      />
    </div>
  );
}
