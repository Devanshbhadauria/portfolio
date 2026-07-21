import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'terminal';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-mono gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-stone-900 hover:bg-stone-800 text-stone-50 font-semibold shadow-md hover:shadow-lg active:scale-[0.98]',
    secondary: 'bg-stone-200/80 hover:bg-stone-300/80 text-stone-900 border border-stone-300/80',
    outline: 'bg-white hover:bg-stone-100/80 text-stone-800 border border-stone-300 shadow-sm',
    ghost: 'bg-transparent hover:bg-stone-200/50 text-stone-700 hover:text-stone-900',
    terminal: 'bg-stone-900 hover:bg-stone-800 text-emerald-400 border border-stone-700 font-mono shadow-inner',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
