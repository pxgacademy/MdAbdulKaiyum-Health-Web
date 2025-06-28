import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
  variant = "primary",
  size = "md",
  ariaLabel = "Button",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded transition-all duration-300 cursor-pointer";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-100 disabled:bg-gray-100",
  };
  const sizes: Record<ButtonSize, string> = {
    sm: "px-2 py-0.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
