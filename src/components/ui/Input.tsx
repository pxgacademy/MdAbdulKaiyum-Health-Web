import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  requiredIndicator?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, requiredIndicator, ...rest }, ref) => {
    const inputId = id || rest.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
            {requiredIndicator && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          className={`w-full px-4 py-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${error ? "border-red-500" : "border-gray-300"} ${className}`}
          {...rest}
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
