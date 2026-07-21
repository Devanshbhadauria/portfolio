import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'cyan' | 'amber' | 'indigo' | 'slate' | 'outline';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  className = '',
  icon,
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-100/90 text-emerald-900 border-emerald-300/80',
    cyan: 'bg-amber-100/90 text-amber-900 border-amber-300/80',
    amber: 'bg-orange-100/90 text-orange-900 border-orange-300/80',
    indigo: 'bg-stone-200/90 text-stone-900 border-stone-300',
    slate: 'bg-stone-200/60 text-stone-800 border-stone-300/80',
    outline: 'bg-transparent text-stone-700 border-stone-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono border ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
