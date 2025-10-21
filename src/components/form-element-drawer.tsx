import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useFormValues } from "@/hooks/use-form-values";
import type { FormElement } from "@/types";
import { makeId } from "@/utils";
import { Grid2x2 } from "lucide-react";
import { useMemo } from "react";

type Props = { elements: FormElement[] };

export function FormElementDrawer({ elements }: Props) {
  const { values, setValue } = useFormValues();

  const rowGrids = useMemo(() => {
    const valid = (elements ?? []).filter(
      (e) =>
        Number.isInteger(e.row) &&
        Number.isInteger(e.col) &&
        e.row > 0 &&
        e.col > 0
    );

    const byRow = new Map<number, FormElement[]>();
    for (const el of valid) {
      const arr = byRow.get(el.row) ?? [];
      arr.push(el);
      byRow.set(el.row, arr);
    }

    return Array.from(byRow.entries())
      .sort(([a], [b]) => a - b)
      .map(([, arr]) => {
        const maxCol = Math.max(...arr.map((e) => e.col));
        const grid = Array<FormElement | null>(maxCol).fill(null);
        for (const el of arr) {
          const i = el.col - 1;
          if (i >= 0 && i < maxCol) grid[i] = el;
        }
        return grid;
      });
  }, [elements]);

  const hasAny = rowGrids.some((g) => g.some(Boolean));
  if (!hasAny) {
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
      {rowGrids.map((grid, rowIndex) => {
        const cols = Math.max(1, grid.length);
        return (
          <div
            key={`row-${rowIndex}`}
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {grid.map((el, colIndex) => {
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
        );
      })}
    </div>
  );
}
