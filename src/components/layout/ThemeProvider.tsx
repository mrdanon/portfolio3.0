'use client';

import { useEffect, ReactNode } from 'react';
import { usePortfolioStore } from '@/lib/store';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = usePortfolioStore();

  useEffect(() => {
    // Remove existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    
    // Add current theme class
    document.documentElement.classList.add(theme);
    
    // Set theme attribute for better CSS control
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#111827' : '#ffffff');
    }
  }, [theme]);

  // Apply theme on initial load
  useEffect(() => {
    // Check for system preference if no theme is set
    if (!theme) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      usePortfolioStore.getState().setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {children}
    </div>
  );
};

export default ThemeProvider; 