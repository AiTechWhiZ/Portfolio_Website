'use client';

import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  ReactNode,
} from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

function applyDarkModeClass(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const stored = localStorage.getItem('darkMode');
    const dark = stored === 'true';

    if (stored === null) {
      localStorage.setItem('darkMode', 'false');
    }

    applyDarkModeClass(dark);
    setIsDarkMode(dark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      applyDarkModeClass(next);
      localStorage.setItem('darkMode', next ? 'true' : 'false');
      return next;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}
