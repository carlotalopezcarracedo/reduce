import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionLabel({ children, light, className = '' }: SectionLabelProps) {
  return (
    <span className={`block text-xs font-bold uppercase tracking-widest mb-3 text-brand-green ${className}`}>
      {children}
    </span>
  );
}
