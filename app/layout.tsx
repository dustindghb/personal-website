// layout.tsx
'use client';
import { ReactNode, FC, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Providers } from './providers';
import { useSafeAppTheme } from './providers';

// Use TypeScript to define the font
const inter = Inter({ subsets: ['latin'] });

// Use dynamic imports with proper typing
const Sidebar = dynamic<Record<string, never>>(
  () => import('@/components/Sidebar').then(mod => mod.default), 
  { ssr: false }
);

const Terminal = dynamic<Record<string, never>>(
  () => import('@/components/Terminal').then(mod => mod.default), 
  { ssr: false }
);

// Define layout props interface
interface RootLayoutProps {
  children: ReactNode;
}

// Use React.FC with generic type for props
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useSafeAppTheme();
  
  // Use responsive layout with proper typing
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Handle client-side rendering safely
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // SSR - Return a simplified version for SSR
  if (!mounted) {
    return (
      <html lang="en">
        <body className={inter.className} style={{ margin: 0, backgroundColor: '#444444' }}>
          <Box sx={{ minHeight: '100vh', color: 'white' }}>
            <Box sx={{ p: 4 }}>
              {/* Loading placeholder */}
              <Box sx={{ height: '100vh' }} />
            </Box>
          </Box>
        </body>
      </html>
    );
  }
  
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, backgroundColor: theme.custom.content.background }}>
        <Providers>
          <Box sx={{ 
            display: 'flex',
            minHeight: '100vh',
            color: theme.custom.content.primary,
            paddingBottom: '150px', // Space for terminal
          }}>
            {/* Sidebar - Hidden on mobile */}
            {!isMobile && <Sidebar />}
            
            {/* Main content area */}
            <Box sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              marginLeft: isMobile ? 0 : '250px', // Adjust based on screen size
              position: 'relative', 
              zIndex: 900, 
            }}>
              <Box sx={{ 
                flex: 1,
                p: 4,
                pb: 8,
              }}>
                {children}
              </Box>
            </Box>
            
            {/* Terminal component */}
            <Terminal />
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;