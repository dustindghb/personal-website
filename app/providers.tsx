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

// Create a context with type safety
const ThemeContext = createContext<ThemeContextType | null>(null);

// Custom hook with type checking
export function useAppTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
}

// Fallback theme for SSR
const ssrTheme = createAppTheme(defaultThemePreferences);

// Type-safe props interface
interface ThemeProviderProps {
  children: ReactNode;
  initialPreferences?: ThemePreferences;
}

// Theme provider component
function ThemeProvider({ 
  children, 
  initialPreferences = defaultThemePreferences 
}: ThemeProviderProps) {
  // Use type-safe state with ThemePreferences
  const [preferences, setPreferencesState] = useState<ThemePreferences>(initialPreferences);
  // Removed unused 'mounted' state
  
  // Type-safe theme generation
  const theme = createAppTheme(preferences);
  
  // Type-safe setter function
  const setPreferences = (newPrefs: ThemePreferences) => {
    setPreferencesState(newPrefs);
    // Save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('themePreferences', JSON.stringify(newPrefs));
    }
  };
  
  // Load saved preferences on mount
  useEffect(() => {
    // Set component as mounted
    
    // Type-safe localStorage handling
    const savedPrefs = typeof window !== 'undefined' 
      ? localStorage.getItem('themePreferences')
      : null;
      
    if (savedPrefs) {
      try {
        // Type assertion to ensure type safety
        const parsedPrefs = JSON.parse(savedPrefs) as ThemePreferences;
        setPreferencesState(parsedPrefs);
      } catch (error) {
        console.error('Failed to parse saved theme preferences', error);
      }
    }
  }, []);
  
  // SSR-safe rendering
  return (
    <ThemeContext.Provider value={{ preferences, setPreferences, theme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

// Safer version of useAppTheme hook for components that might render during SSR
export function useSafeAppTheme() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  try {
    const context = useContext(ThemeContext);
    if (!mounted || !context) {
      // Return default theme during SSR or if context is not available
      return { 
        theme: ssrTheme, 
        preferences: defaultThemePreferences,
        setPreferences: () => {} // No-op during SSR
      };
    }
    return context;
  } catch (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error
  ) {
    // Return default theme if error occurs
    return { 
      theme: ssrTheme, 
      preferences: defaultThemePreferences,
      setPreferences: () => {} // No-op during error
    };
  }
}

// Main Providers component with enhanced TypeScript typing
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Analytics />
    </ThemeProvider>
  );
}