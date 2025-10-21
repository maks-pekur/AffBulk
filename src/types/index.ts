export type FormElementType = "TEXT_INPUT" | "SELECT";

export type FormValues = Record<string, string>;

export interface FormElement {
  row: number;
  col: number;
  label: string;
  type: FormElementType;
  placeholder?: string;
  options?: string[];
}

export interface ParseError {
  line: number;
  raw: string;
  message: string;
}
