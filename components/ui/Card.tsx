import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  glowOnHover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`relative bg-[#121824]/90 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 transition-all duration-300 ${
        glowOnHover
          ? 'hover:border-slate-700 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-0.5'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
