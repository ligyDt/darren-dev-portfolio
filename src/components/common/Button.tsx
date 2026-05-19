import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: ReactNode;
  rel?: string;
  target?: string;
  variant?: ButtonVariant;
}

export type ButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-purple-700',
  secondary:
    'border border-blue-400/50 bg-blue-500/10 text-blue-100 hover:border-blue-300 hover:bg-blue-500/20',
  ghost: 'text-zinc-200 hover:bg-white/10 hover:text-white',
};

// 组件用途：统一站内按钮和外链按钮的视觉风格。
export function Button({
  children,
  className = '',
  href,
  icon,
  onClick,
  rel,
  target = '_blank',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const buttonClassName = `inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-dark ${variantClassName[variant]} ${className}`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (!href || event.defaultPrevented) {
      return;
    }

    if (href.startsWith('mailto:')) {
      window.location.href = href;
      return;
    }

    window.open(
      href,
      target,
      rel?.includes('noreferrer') ? 'noopener,noreferrer' : 'noopener',
    );
  };

  return (
    <button
      {...props}
      className={buttonClassName}
      onClick={handleClick}
      type={type}
    >
      {icon}
      {children}
    </button>
  );
}
