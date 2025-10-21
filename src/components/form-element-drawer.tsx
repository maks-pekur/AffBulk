import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useFormValues } from "@/hooks/use-form-values";
import type { FormElement } from "@/types";
import { makeId } from "@/utils";
import { Grid2x2 } from "lucide-react";
import { useMemo } from "react";

type Props = {
  elements: FormElement[];
};

export function FormElementDrawer({ elements }: Props) {
  const { values, setValue } = useFormValues();

  const { grid, maxCol } = useMemo(() => {
    const valid = (elements ?? []).filter(
      (e) =>
        Number.isInteger(e.row) &&
        Number.isInteger(e.col) &&
        e.row > 0 &&
        e.col > 0
    );
    if (valid.length === 0) {
      return { grid: [] as (FormElement | null)[][], maxCol: 0 };
    }

    const maxRow = Math.max(...valid.map((e) => e.row));
    const maxCol = Math.max(...valid.map((e) => e.col));

    const grid: (FormElement | null)[][] = Array.from({ length: maxRow }, () =>
      Array.from({ length: maxCol }, () => null)
    );

    for (const e of valid) {
      const r = e.row - 1;
      const c = e.col - 1;
      if (grid[r] && typeof grid[r][c] !== "undefined") {
        grid[r][c] = e;
      }
    }

    return { grid, maxCol };
  }, [elements]);

  const flat = grid.flat().filter(Boolean) as FormElement[];
  if (flat.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] rounded-lg border-2 border-dashed border-white/50">
        <p className="text-sm text-white/50 flex flex-col items-center">
          <Grid2x2 className="h-10 w-10 text-muted mb-2" />
          No valid elements to display
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {grid.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${maxCol}, minmax(0, 1fr))` }}
        >
          {row.map((el, colIndex) => {
            if (!el) {
              return (
                <div
                  key={`empty-${rowIndex}-${colIndex}`}
                  className="h-0 min-h-[40px]"
                />
              );
            }

            const id = makeId(el);
            const val = values[id] ?? "";

            if (el.type === "TEXT_INPUT") {
              return (
                <Input
                  key={id}
                  id={id}
                  label={el.label}
                  value={val}
                  onChange={(e) =>
                    setValue(id, (e.target as HTMLInputElement).value)
                  }
                  placeholder={el.placeholder ?? ""}
                />
              );
            }

            const options = el.options ?? [];
            return (
              <Select
                key={id}
                id={id}
                label={el.label}
                value={val}
                onChange={(e) =>
                  setValue(id, (e.target as HTMLSelectElement).value)
                }
                options={options}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
