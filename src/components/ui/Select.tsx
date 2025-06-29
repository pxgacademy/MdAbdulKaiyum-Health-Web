import React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  requiredIndicator?: boolean;
  options: { label: string; value: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { label, error, className = "", id, requiredIndicator, options, ...rest },
    ref
  ) => {
    const selectId = id || rest.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
            {requiredIndicator && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <select
          id={selectId}
          ref={ref}
          className={`w-full px-4 py-4 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? "border-red-500" : "border-gray-300"} ${className}`}
          {...rest}
        >
          <option value="">Select one</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
