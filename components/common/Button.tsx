import React from "react";
import { ButtonProps } from "@/interfaces";


const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) => {
   const variantStyle = {
    primary: "bg-emerald-500 rounded-full px-4 py-2 text-white hover:bg-emerald-800",
    secondary:
      "bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 hover:bg-gray-800 hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={(variantStyle[variant], className)}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
