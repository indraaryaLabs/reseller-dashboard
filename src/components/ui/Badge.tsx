import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'warning' | 'danger' | 'ghost';
  className?: string;
  animatePing?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className = '',
  animatePing = false
}) => {
  const baseClasses = "text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 backdrop-blur-md shadow-lg";
  
  const variants = {
    default: "bg-[#FF6A00]/90 text-white shadow-[#FF6A00]/20",
    warning: "bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00]",
    danger: "bg-red-500/90 text-white shadow-red-500/20",
    ghost: "bg-gray-800/90 text-gray-300"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {animatePing && <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />}
      {children}
    </div>
  );
};

export default Badge;
