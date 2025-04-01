'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Analytics } from '@vercel/analytics/react';
import { 
  createAppTheme, 
  ThemePreferences, 
  ThemeContextType, 
  defaultThemePreferences 
} from './theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

export function useAppTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
}

const ssrTheme = createAppTheme(defaultThemePreferences);

interface ThemeProviderProps {
  children: ReactNode;
  initialPreferences?: ThemePreferences;
}

function ThemeProvider({ 
  children, 
  initialPreferences = defaultThemePreferences 
}: ThemeProviderProps) {
  const [preferences, setPreferencesState] = useState<ThemePreferences>(initialPreferences);
  const theme = createAppTheme(preferences);
  
  const setPreferences = (newPrefs: ThemePreferences) => {
    setPreferencesState(newPrefs);
    if (typeof window !== 'undefined') {
      localStorage.setItem('themePreferences', JSON.stringify(newPrefs));
    }
  };
  
  useEffect(() => {
    const savedPrefs = typeof window !== 'undefined' 
      ? localStorage.getItem('themePreferences')
      : null;
      
    if (savedPrefs) {
      try {
        const parsedPrefs = JSON.parse(savedPrefs) as ThemePreferences;
        setPreferencesState(parsedPrefs);
      } catch (error) {
        console.error('Failed to parse saved theme preferences', error);
      }
    }
  }, []);
  
  return (
    <ThemeContext.Provider value={{ preferences, setPreferences, theme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useSafeAppTheme() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  try {
    const context = useContext(ThemeContext);
    if (!mounted || !context) {
      return { 
        theme: ssrTheme, 
        preferences: defaultThemePreferences,
        setPreferences: () => {} 
      };
    }
    return context;
  } catch (
    error
  ) {
    return { 
      theme: ssrTheme, 
      preferences: defaultThemePreferences,
      setPreferences: () => {}
    };
  }
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Analytics />
    </ThemeProvider>
  );
}