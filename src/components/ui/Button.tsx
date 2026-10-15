import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'disabled' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 flex justify-center items-center gap-2";
  
  const variants = {
    primary: "bg-[#FF6A00] text-black hover:shadow-[0_0_30px_-5px_#FF6A00] hover:scale-[1.02]",
    outline: "border border-white/20 text-white hover:bg-[#FF6A00] hover:border-[#FF6A00] hover:text-black",
    disabled: "border border-white/5 bg-white/5 text-gray-600 cursor-not-allowed",
    ghost: "bg-white/10 hover:bg-[#FF6A00] hover:text-black rounded-full text-sm font-medium transition-all duration-300 px-6 py-2"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      disabled={variant === 'disabled' || props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
