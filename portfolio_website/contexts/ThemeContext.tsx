'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface GradientTheme {
  name: string;
  from: string;
  to: string;
}

const gradientThemes: GradientTheme[] = [
  { name: 'Ocean', from: 'from-blue-600', to: 'to-purple-600' },
  { name: 'Sunset', from: 'from-orange-500', to: 'to-pink-600' },
  { name: 'Forest', from: 'from-green-600', to: 'to-emerald-600' },
  { name: 'Berry', from: 'from-purple-600', to: 'to-pink-600' },
  { name: 'Sky', from: 'from-cyan-500', to: 'to-blue-600' },
  { name: 'Fire', from: 'from-red-600', to: 'to-orange-600' },
];

interface ThemeContextType {
  currentTheme: GradientTheme;
  setTheme: (theme: GradientTheme) => void;
  themes: GradientTheme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<GradientTheme>(gradientThemes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('accentTheme');
    if (savedTheme) {
      const theme = gradientThemes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  const setTheme = (theme: GradientTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('accentTheme', theme.name);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes: gradientThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
