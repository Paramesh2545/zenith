
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-semibold rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900',
    secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-900',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
