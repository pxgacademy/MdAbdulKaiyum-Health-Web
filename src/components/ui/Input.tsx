import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...rest }, ref) => {
    const inputId = id || rest.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          className={` input w-full focus:outline-none
            ${
              error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } 
            ${className}`}
          {...rest}
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
