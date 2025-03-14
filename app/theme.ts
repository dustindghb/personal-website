import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      terminal: {
        background: string;
        text: string;
        prompt: string;
        success: string;
        error: string;
        warning: string;
        borderColor: string;
        commandBg: string;
      };
      sidebar: {
        background: string;
        itemHover: string;
        itemSelected: string;
        text: string;
        borderColor: string;
      };
      content: {
        background: string;
        paper: string;
        primary: string;
        secondary: string;
      };
    };
  }
  
  interface ThemeOptions {
    custom?: {
      terminal?: {
        background?: string;
        text?: string;
        prompt?: string;
        success?: string;
        error?: string;
        warning?: string;
        borderColor?: string;
        commandBg?: string;
      };
      sidebar?: {
        background?: string;
        itemHover?: string;
        itemSelected?: string;
        text?: string;
        borderColor?: string;
      };
      content?: {
        background?: string;
        paper?: string;
        primary?: string;
        secondary?: string;
      };
    };
  }
}

export type ThemeMode = 'dark' | 'light' | 'terminal';

interface BaseThemePreferences {
  fontSize: 'small' | 'medium' | 'large';
  fontFamily: 'default' | 'monospace' | 'sans-serif';
  animations: boolean;
}

interface TerminalThemeCustomizations {
  terminalPrompt: string;
  terminalColor: string;
}

interface StandardThemeCustomizations {
  accentColor: string;
}

export interface TerminalThemePreferences extends BaseThemePreferences {
  mode: 'terminal';
  customizations: TerminalThemeCustomizations;
}

export interface LightThemePreferences extends BaseThemePreferences {
  mode: 'light';
  customizations: StandardThemeCustomizations;
}

export interface DarkThemePreferences extends BaseThemePreferences {
  mode: 'dark';
  customizations: StandardThemeCustomizations;
}

export type ThemePreferences = TerminalThemePreferences | LightThemePreferences | DarkThemePreferences;

export function isTerminalTheme(
  prefs: ThemePreferences
): prefs is TerminalThemePreferences {
  return prefs.mode === 'terminal';
}

export function isLightTheme(
  prefs: ThemePreferences
): prefs is LightThemePreferences {
  return prefs.mode === 'light';
}

export function isDarkTheme(
  prefs: ThemePreferences
): prefs is DarkThemePreferences {
  return prefs.mode === 'dark';
}

const terminalColors = {
  green: '#00ff00',
  cyan: '#00ffff',
  blue: '#0000ff',
  magenta: '#ff00ff',
  yellow: '#ffff00',
  red: '#ff0000',
} as const;

export type TerminalColorName = keyof typeof terminalColors;

export function getTerminalColor(name: TerminalColorName): string {
  return terminalColors[name];
}

export const defaultThemePreferences: DarkThemePreferences = {
  mode: 'dark',
  fontSize: 'medium',
  fontFamily: 'default',
  animations: true,
  customizations: {
    accentColor: '#90caf9'
  }
};

export function createAppTheme(preferences: ThemePreferences): Theme {
  const baseOptions: ThemeOptions = {
    typography: {
      fontFamily: preferences.fontFamily === 'monospace' 
        ? '"Roboto Mono", monospace' 
        : preferences.fontFamily === 'sans-serif'
          ? '"Roboto", "Helvetica", sans-serif'
          : '"Inter", "Roboto", sans-serif',
      fontSize: preferences.fontSize === 'small' 
        ? 14 
        : preferences.fontSize === 'large' 
          ? 16 
          : 15,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  };
  
  const darkThemeOptions: ThemeOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: isTerminalTheme(preferences) 
          ? preferences.customizations.terminalColor
          : isDarkTheme(preferences) || isLightTheme(preferences)
            ? preferences.customizations.accentColor 
            : '#90caf9',
        light: '#90caf9',
        dark: '#42a5f5',
      },
      secondary: {
        main: '#ce93d8',
        light: '#f3e5f5',
        dark: '#ab47bc',
      },
      background: {
        default: '#444444',
        paper: '#333333',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
    },
    custom: {
      terminal: {
        background: '#222222',
        text: '#ffffff',
        prompt: '#00ff00',
        success: '#00ff00',
        error: '#ff0000',
        warning: '#ffff00',
        borderColor: 'rgba(255,255,255,0.5)',
        commandBg: 'rgba(255, 255, 255, 0.08)',
      },
      sidebar: {
        background: '#222222',
        itemHover: 'rgba(255, 255, 255, 0.08)',
        itemSelected: 'rgba(255, 255, 255, 0.12)',
        text: 'white',
        borderColor: 'rgba(255,255,255,0.5)',
      },
      content: {
        background: '#444444',
        paper: '#333333',
        primary: 'white',
        secondary: 'rgba(255, 255, 255, 0.7)',
      }
    },
  };
  
  const lightThemeOptions: ThemeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: isTerminalTheme(preferences) 
          ? preferences.customizations.terminalColor
          : isDarkTheme(preferences) || isLightTheme(preferences)
            ? preferences.customizations.accentColor 
            : '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8',
        dark: '#7b1fa2',
      },
      background: {
        default: '#f5f5f5',
        paper: '#ffffff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
      },
    },
    custom: {
      terminal: {
        background: '#f8f9fa',
        text: '#212529',
        prompt: '#0d6efd',
        success: '#198754',
        error: '#dc3545',
        warning: '#ffc107',
        borderColor: 'rgba(0,0,0,0.2)',
        commandBg: 'rgba(0, 0, 0, 0.05)',
      },
      sidebar: {
        background: '#f8f9fa',
        itemHover: 'rgba(0, 0, 0, 0.04)',
        itemSelected: 'rgba(25, 118, 210, 0.12)',
        text: 'rgba(0, 0, 0, 0.87)',
        borderColor: 'rgba(0,0,0,0.2)',
      },
      content: {
        background: '#f5f5f5',
        paper: '#ffffff',
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
      }
    },
  };
  
  const terminalThemeOptions: ThemeOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: isTerminalTheme(preferences) 
          ? preferences.customizations.terminalColor
          : '#00ff00',
        light: '#33ff33',
        dark: '#00cc00',
      },
      secondary: {
        main: '#00ffff', 
        light: '#33ffff',
        dark: '#00cccc',
      },
      background: {
        default: '#000000', 
        paper: '#111111', 
      },
      text: {
        primary: '#00ff00', 
        secondary: '#aaaaaa', 
      },
    },
    custom: {
      terminal: {
        background: '#000000',
        text: '#00ff00',
        prompt: isTerminalTheme(preferences) 
          ? preferences.customizations.terminalPrompt 
          : '#00ff00',
        success: '#00ff00',
        error: '#ff0000',
        warning: '#ffff00',
        borderColor: '#00ff00',
        commandBg: 'rgba(0, 255, 0, 0.1)',
      },
      sidebar: {
        background: '#000000',
        itemHover: 'rgba(0, 255, 0, 0.1)',
        itemSelected: 'rgba(0, 255, 0, 0.15)',
        text: '#00ff00',
        borderColor: '#00ff00',
      },
      content: {
        background: '#000000',
        paper: '#111111',
        primary: '#00ff00',
        secondary: '#aaaaaa',
      }
    },
  };
  
  const themeOptions = preferences.mode === 'light' 
    ? lightThemeOptions 
    : preferences.mode === 'terminal' 
      ? terminalThemeOptions 
      : darkThemeOptions;

  return createTheme({
    ...baseOptions,
    ...themeOptions,
  });
}

export type ThemeContextType = {
  preferences: ThemePreferences;
  setPreferences: (newPrefs: ThemePreferences) => void;
  theme: Theme;
};