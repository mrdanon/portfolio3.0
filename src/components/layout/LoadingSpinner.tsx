'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'spinner' | 'dots' | 'gears';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner = ({ 
  size = 'medium', 
  variant = 'spinner', 
  text = 'Loading...',
  fullScreen = false
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const SpinnerVariant = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-blue-200 border-t-blue-600 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );

  const DotsVariant = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${size === 'small' ? 'w-2 h-2' : size === 'medium' ? 'w-3 h-3' : 'w-4 h-4'} bg-blue-600 rounded-full`}
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
          transition={{ 
            duration: 0.8, 
            repeat: Infinity, 
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const GearsVariant = () => (
    <div className="relative">
      <motion.div
        className={`${sizeClasses[size]} border-2 border-blue-600 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{
          borderStyle: 'dashed',
        }}
      />
      <motion.div
        className={`absolute inset-1 ${size === 'small' ? 'w-2 h-2' : size === 'medium' ? 'w-4 h-4' : 'w-6 h-6'} border border-purple-600 rounded-full`}
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        style={{
          borderStyle: 'dotted',
        }}
      />
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return <DotsVariant />;
      case 'gears':
        return <GearsVariant />;
      default:
        return <SpinnerVariant />;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderVariant()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 dark:text-gray-400 font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center p-4"
    >
      {content}
    </motion.div>
  );
};

// Specific loading components for common use cases
export const PageLoader = () => (
  <LoadingSpinner 
    size="large" 
    variant="gears" 
    text="Loading Portfolio..." 
    fullScreen 
  />
);

export const SectionLoader = () => (
  <LoadingSpinner 
    size="medium" 
    variant="spinner" 
    text="Loading content..." 
  />
);

export const ButtonLoader = () => (
  <LoadingSpinner 
    size="small" 
    variant="spinner" 
  />
);

export default LoadingSpinner; 