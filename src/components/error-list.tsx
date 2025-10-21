import type { ParseError } from "@/types";

export function ErrorList({ errors }: { errors: ParseError[] }) {
  if (!errors?.length) return null;

  return (
    <div className="rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-yellow-200 p-3 text-xs">
      <div className="font-medium">Parse warnings</div>
      <ul className="mt-1 list-disc pl-4">
        {errors.slice(0, 5).map((e) => (
          <li key={`${e.line}-${e.message}`}>
            Line {e.line}: {e.message}
          </li>
        ))}
      </ul>
      {errors.length > 5 && (
        <div className="opacity-80 mt-1">…and {errors.length - 5} more</div>
      )}
    </div>
  );
}
