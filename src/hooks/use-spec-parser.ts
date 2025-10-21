import type { FormElement, ParseError } from "@/types";
import { parseLine } from "@/utils";
import { useMemo } from "react";

export function useSpecParser(input: string) {
  return useMemo(() => {
    const lines = input
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const elements: FormElement[] = [];
    const errors: ParseError[] = [];

    lines.forEach((raw, i) => {
      const { spec, error } = parseLine(raw, i);
      if (spec) elements.push(spec);
      if (error) errors.push(error);
    });

    return { elements, errors, lineCount: lines.length };
  }, [input]);
}
