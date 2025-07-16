import React from "react";
import clsx from "clsx";

type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type Size = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-primary text-white hover:bg-primary/90",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-white hover:bg-gray-100 text-gray-800",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  link: "text-primary underline hover:text-primary/80",
};

const sizeClasses: Record<Size, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10 p-2",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
