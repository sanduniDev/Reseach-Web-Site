import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
}

interface ButtonLinkProps extends Omit<ButtonProps, 'onClick' | 'type'> {
  to: string;
  external?: boolean;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500';
    case 'secondary':
      return 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500';
    case 'outline':
      return 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500';
    case 'ghost':
      return 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
    default:
      return 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500';
  }
};

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'py-1.5 px-3 text-sm';
    case 'md':
      return 'py-2 px-4 text-base';
    case 'lg':
      return 'py-3 px-6 text-lg';
    default:
      return 'py-2 px-4 text-base';
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  icon,
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  return (
    <button
      type={type}
      className={`rounded-md font-medium inline-flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${sizeClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  external = false,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon,
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-md font-medium inline-flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          disabled ? 'opacity-50 pointer-events-none' : ''
        } ${variantClasses} ${sizeClasses} ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`rounded-md font-medium inline-flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        disabled ? 'opacity-50 pointer-events-none' : ''
      } ${variantClasses} ${sizeClasses} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};