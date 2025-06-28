import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  requiredIndicator?: boolean;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className = "", id, requiredIndicator, ...rest }, ref) => {
    const inputId = id || rest.name;
    const [show, setShow] = useState(false);

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

        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            type={show ? "text" : "password"}
            className={`w-full px-4 py-2 pr-10 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
            ${error ? "border-red-500" : "border-gray-300"} ${className}`}
            {...rest}
          />
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
