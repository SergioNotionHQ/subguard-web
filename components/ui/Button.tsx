'use client';

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary hover:bg-primary-dark text-white shadow-sm',
  secondary: 'border border-slate-300 hover:bg-slate-50 text-text-primary',
  ghost: 'hover:bg-slate-100 text-text-secondary',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', size = 'md', className = '', ...rest } = props;
  const classes = `inline-flex items-center justify-center font-semibold rounded-xl transition-colors duration-200 cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ('href' in rest && rest.href) {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
