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
      className={`relative bg-white border border-stone-200/90 rounded-xl p-6 shadow-sm transition-all duration-300 ${
        glowOnHover
          ? 'hover:border-stone-300 hover:shadow-md hover:shadow-stone-300/30 hover:-translate-y-0.5'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
