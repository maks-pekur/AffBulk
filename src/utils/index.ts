import type { FormElement, FormElementType, ParseError } from "@/types";

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeId = (el: FormElement) =>
  `${el.row}:${el.col}:${slug(el.label)}:${el.type}`;

export function toInt(value: string) {
  const n = Number(value);
  return Number.isInteger(n) ? n : NaN;
}

export function isType(t: string): t is FormElementType {
  return t === "TEXT_INPUT" || t === "SELECT";
}

export const trimJoin = (curr: string, lineOrBlock: string) => {
  const trimmed = curr.trim();
  return trimmed ? `${trimmed}\n${lineOrBlock}` : lineOrBlock;
};

export function parseLine(
  raw: string,
  index: number
): { spec?: FormElement; error?: ParseError } {
  const parts = raw.split(";").map((p) => p.trim());

  if (parts.length < 4) {
    return {
      error: {
        line: index + 1,
        raw,
        message: "Expected at least 4 parts: row;col;label;type;[...]",
      },
    };
  }

  const [rowS, colS, label, typeS] = parts as [
    string,
    string,
    string,
    string,
    string?
  ];
  const rest = parts.slice(4).join(";");

  const row = toInt(rowS);
  const col = toInt(colS);

  if (!Number.isInteger(row) || row <= 0)
    return {
      error: { line: index + 1, raw, message: "row must be an integer > 0" },
    };
  if (!Number.isInteger(col) || col <= 0)
    return {
      error: { line: index + 1, raw, message: "col must be an integer > 0" },
    };

  if (!label?.trim())
    return { error: { line: index + 1, raw, message: "label is empty" } };
  if (!isType(typeS))
    return {
      error: { line: index + 1, raw, message: `unknown type: ${typeS}` },
    };

  const spec: FormElement = {
    row,
    col,
    label: label.trim(),
    type: typeS,
  };

  if (typeS === "TEXT_INPUT") {
    spec.placeholder = rest?.trim() || undefined;
  } else if (typeS === "SELECT") {
    const options = rest
      ? rest
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [];
    if (options.length === 0)
      return {
        error: { line: index + 1, raw, message: "SELECT has no options" },
      };
    spec.options = options;
  }
  return { spec };
}
