import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  className?: string;
  type?: 'button' | 'submit';
}

const GlowButton = ({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  type = 'button',
}: GlowButtonProps) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-xl hover:scale-105 glow-effect',
    secondary: 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg',
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      <span>{children}</span>
    </motion.button>
  );
};

export default GlowButton;
