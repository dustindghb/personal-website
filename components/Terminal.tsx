'use client';
// Terminal.tsx
import { useState, useEffect, useCallback, useRef, KeyboardEvent } from 'react';
import { TextField, Box, Button, IconButton, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { validPaths } from '@/config/navigation';
import { GitHub, LinkedIn, Code } from '@mui/icons-material';
import WaveAnimation from './WaveAnimation';
import { useSafeAppTheme } from '../app/providers';

// Create a discriminated union for command types
type BaseCommand = {
  timestamp: number;
  raw: string;
};

type NavigationCommand = BaseCommand & {
  type: 'navigation';
  destination: string;
  success: boolean;
};

type UtilityCommand = BaseCommand & {
  type: 'utility';
  action: 'clear' | 'history' | 'help';
};

type InvalidCommand = BaseCommand & {
  type: 'invalid';
  error: string;
};

// Union type for all command types
type Command = NavigationCommand | UtilityCommand | InvalidCommand;

// Type guard functions for command types
function isNavigationCommand(cmd: Command): cmd is NavigationCommand {
  return cmd.type === 'navigation';
}

function isUtilityCommand(cmd: Command): cmd is UtilityCommand {
  return cmd.type === 'utility';
}

function isInvalidCommand(cmd: Command): cmd is InvalidCommand {
  return cmd.type === 'invalid';
}

// Add parseCommand outside the component to avoid recreating it on each render
// Parse command with proper typing
const parseCommand = (cmdStr: string, pathname: string): Command => {
  const trimmedCmd = cmdStr.trim();
  const timestamp = Date.now();
  const baseCmd: BaseCommand = { timestamp, raw: trimmedCmd };
  
  // Navigation commands
  if (trimmedCmd === 'cd ..') {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      const newPath = segments.slice(0, -1).join('/');
      const destination = newPath ? `/${newPath}` : '/';
      return { 
        ...baseCmd, 
        type: 'navigation', 
        destination, 
        success: true 
      };
    }
    // Already at root
    return { 
      ...baseCmd, 
      type: 'navigation', 
      destination: '/', 
      success: true 
    };
  } 
  else if (trimmedCmd.startsWith('cd ')) {
    const targetPath = trimmedCmd.slice(3).replace(/^\/+|\/+$/g, '').toLowerCase();
    if (validPaths[targetPath]) {
      return { 
        ...baseCmd, 
        type: 'navigation', 
        destination: `/${targetPath}`, 
        success: true 
      };
    }
    // Invalid path
    return { 
      ...baseCmd, 
      type: 'navigation', 
      destination: `/${targetPath}`, 
      success: false 
    };
  } 
  
  // Utility commands
  else if (trimmedCmd === 'clear' || trimmedCmd === 'cls') {
    return { 
      ...baseCmd, 
      type: 'utility', 
      action: 'clear' 
    };
  } 
  else if (trimmedCmd === 'history') {
    return { 
      ...baseCmd, 
      type: 'utility', 
      action: 'history' 
    };
  }
  else if (trimmedCmd === 'help') {
    return { 
      ...baseCmd, 
      type: 'utility', 
      action: 'help' 
    };
  }
  
  // Invalid command
  return { 
    ...baseCmd, 
    type: 'invalid', 
    error: 'Command not found' 
  };
};

// Command history manager class
class CommandHistory {
  private items: Command[] = [];
  private capacity: number;
  
  constructor(capacity: number = 50) {
    this.capacity = capacity;
  }
  
  add(command: Command): void {
    this.items.unshift(command);
    if (this.items.length > this.capacity) {
      this.items.pop();
    }
  }
  
  get(index: number): Command | undefined {
    return this.items[index];
  }
  
  getAll(): ReadonlyArray<Command> {
    return [...this.items];
  }
  
  clear(): void {
    this.items = [];
  }
  
  get size(): number {
    return this.items.length;
  }
  
  // Filter commands by type using type predicates
  getNavigationCommands(): NavigationCommand[] {
    return this.items.filter(isNavigationCommand);
  }
  
  getUtilityCommands(): UtilityCommand[] {
    return this.items.filter(isUtilityCommand);
  }
  
  getInvalidCommands(): InvalidCommand[] {
    return this.items.filter(isInvalidCommand);
  }
}

// Terminal component props interface
interface TerminalProps {
  sidebarWidth?: string;
  maxHistorySize?: number;
  // Keeping showCommands but not using it - an alternative would be to remove it
  // from the interface if it's not needed anywhere in the application
  showCommands?: boolean;
}

export default function Terminal({
  sidebarWidth = '250px',
  maxHistorySize = 50,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showCommands = false
}: TerminalProps) {
  // Component state with proper typing
  const [mounted, setMounted] = useState<boolean>(false);
  const [command, setCommand] = useState<string>('');
  const [history] = useState<CommandHistory>(() => new CommandHistory(maxHistorySize));
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Hooks
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useSafeAppTheme();
  
  // Pre-define all handlers regardless of mounted state
  const handlePathClick = useCallback((index: number): void => {
    if (index === 0) {
      router.push('/');
    } else {
      const segments = pathname === '/' 
        ? ['Home'] 
        : ['Home', ...pathname.split('/').filter(Boolean)];
      const newPath = '/' + segments.slice(1, index + 1).join('/');
      router.push(newPath);
    }
  }, [router, pathname]);

  // Pre-define command executor
  const executeCommand = useCallback((cmd: Command): void => {
    // Type narrowing with type guards
    if (isNavigationCommand(cmd) && cmd.success) {
      router.push(cmd.destination);
    }
    else if (isUtilityCommand(cmd)) {
      if (cmd.action === 'clear') {
        history.clear();
      }
    }
  }, [router, history]);

  // Handle keyboard events
  const handleCommand = useCallback((e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter' && command) {
      // Parse command
      const cmd = parseCommand(command, pathname);
      
      // Add to history
      history.add(cmd);
      setHistoryIndex(-1);
      
      // Execute command
      executeCommand(cmd);
      
      // Clear input
      setCommand('');
    } 
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      // Navigate up through command history
      if (history.size > 0 && historyIndex < history.size - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        const historicalCmd = history.get(newIndex);
        if (historicalCmd) {
          setCommand(historicalCmd.raw);
        }
      }
    } 
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      // Navigate down through command history
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const historicalCmd = history.get(newIndex);
        if (historicalCmd) {
          setCommand(historicalCmd.raw);
        }
      } else if (historyIndex === 0) {
        // Clear command when reaching the end of history
        setHistoryIndex(-1);
        setCommand('');
      }
    }
  }, [command, history, historyIndex, pathname, executeCommand]);
  
  // Handle component mount
  useEffect(() => {
    setMounted(true);
    
    // Focus input on mount
    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
    
    // Handle keyboard shortcuts globally
    const handleGlobalKeydown = (e: KeyboardEvent) => {
      // Alt+T to focus terminal
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    
    // Add global event listener with proper type
    document.addEventListener('keydown', handleGlobalKeydown as unknown as EventListener);
    
    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleGlobalKeydown as unknown as EventListener);
    };
  }, []);

  // Always return a component, but conditionally render full content
  if (!mounted) {
    return (
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: sidebarWidth,
        right: 0,
        height: '60px',
        zIndex: 900,
      }} />
    );
  }
  
  // Get path segments with proper typing when mounted
  const pathSegments: string[] = pathname === '/' 
    ? ['Home'] 
    : ['Home', ...pathname.split('/').filter(Boolean)];
  
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 0,
      left: sidebarWidth,
      right: 0,
      zIndex: 900,
    }}>
      <WaveAnimation />
      <Box sx={{ 
        p: 2,
        bgcolor: theme.custom.terminal.background,
        height: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0px -4px 12px rgba(0,0,0,0.4)',
        borderTop: `3px solid ${theme.custom.terminal.borderColor}`,
        position: 'relative',
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1,
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            flexShrink: 0, 
            overflowX: 'auto', 
            '&::-webkit-scrollbar': { display: 'none' }, 
            scrollbarWidth: 'none', 
          }}>
            {pathSegments.map((segment, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Button
                  onClick={() => handlePathClick(index)}
                  sx={{
                    color: theme.custom.terminal.text,
                    bgcolor: theme.custom.terminal.commandBg,
                    borderRadius: 1,
                    px: 1,
                    py: 0.5,
                    minWidth: 'auto',
                    textTransform: 'none',
                    fontFamily: 'monospace',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                    }
                  }}
                >
                  {segment}
                </Button>
                {index < pathSegments.length - 1 && (
                  <Box sx={{ 
                    color: theme.custom.terminal.text,
                    mx: 1,
                    fontSize: '0.9rem',
                    fontFamily: 'monospace',
                    flexShrink: 0
                  }}>/</Box>
                )}
              </Box>
            ))}
          </Box>
          <Box sx={{ 
            color: theme.custom.terminal.prompt,
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            flexShrink: 0
          }}>&gt;</Box>
          <TextField
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            placeholder='Enter a command in the "terminal" to navigate the website'
            variant="standard"
            inputRef={inputRef}
            fullWidth
            sx={{
              flex: 1,
              '& .MuiInput-root': {
                color: theme.custom.terminal.text,
                '&:before, &:after': {
                  borderBottomColor: 'transparent'
                }
              },
              '& .MuiInput-input': {
                pl: 1,
                fontFamily: 'monospace',
                fontSize: '0.9rem'
              }
            }}
            InputProps={{
              disableUnderline: true
            }}
          />
        </Box>
        
        {/* Footer in bottom right corner */}
        <Box
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-10%)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'rgba(255,255,255,0.5)',
            zIndex: 1000,
          }}
        >
          <Typography 
            variant="caption" 
            sx={{ 
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 0.5,
              mr: 1,
              whiteSpace: 'nowrap',
              color: theme.custom.terminal.text,
              opacity: 0.5
            }}
          >
            <Code fontSize="inherit" />
            Designed by Dustin Duong
          </Typography>
          
          <IconButton 
            href="https://github.com/dustindghb" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            size="small"
            sx={{ 
              color: theme.custom.terminal.text,
              opacity: 0.5,
              padding: '4px',
              '&:hover': { 
                color: theme.custom.terminal.text,
                opacity: 1,
                backgroundColor: theme.custom.terminal.commandBg
              }
            }}
          >
            <GitHub fontSize="small" />
          </IconButton>
          
          <IconButton 
            href="https://www.linkedin.com/in/dustin-duong-ab505b2a5/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            size="small"
            sx={{ 
              color: theme.custom.terminal.text,
              opacity: 0.5,
              padding: '4px',
              '&:hover': { 
                color: theme.custom.terminal.text,
                opacity: 1,
                backgroundColor: theme.custom.terminal.commandBg 
              }
            }}
          >
            <LinkedIn fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}