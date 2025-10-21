import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: string[];
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = ({
  label,
  id,
  options,
  placeholder = "Select...",
  className = "",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm text-gray-400">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        className={`w-full rounded-xl border border-white/50 px-3 py-2 focus:outline-none focus:ring  ${className}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
