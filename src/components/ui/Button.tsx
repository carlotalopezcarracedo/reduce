import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  arrow?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-green text-brand-dark font-bold hover:brightness-110 active:scale-95',
  secondary: 'border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white',
  ghost: 'text-brand-dark font-semibold underline underline-offset-4 hover:text-brand-green',
  'outline-light': 'border-2 border-white/40 text-white font-semibold hover:border-white hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-full gap-1.5',
  md: 'px-6 py-3 text-sm rounded-full gap-2',
  lg: 'px-8 py-4 text-base rounded-full gap-2',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  arrow,
  className = '',
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (to) return <Link to={to} className={classes}>{inner}</Link>;
  if (href) return <a href={href} className={classes}>{inner}</a>;
  return <button type={type} className={classes} onClick={onClick} disabled={disabled}>{inner}</button>;
}
