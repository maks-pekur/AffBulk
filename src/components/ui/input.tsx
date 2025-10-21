import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  id,
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
      <input
        id={id}
        {...props}
        className={`w-full rounded-xl border border-white/50 px-3 py-2 focus:outline-none focus:ring ${className}`}
      />
    </div>
  );
};
