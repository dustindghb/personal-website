// layout.tsx
'use client';
import { ReactNode, FC, useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Providers } from './providers';
import { useSafeAppTheme } from './providers';

const inter = Inter({ subsets: ['latin'] });

const Sidebar = dynamic<Record<string, never>>(
  () => import('@/components/Sidebar').then(mod => mod.default), 
  { ssr: false }
);

const MobileMenu = dynamic<{ isOpen: boolean; onClose: () => void }>(
  () => import('@/components/MobileMenu').then(mod => mod.default), 
  { ssr: false }
);


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useSafeAppTheme();
  

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setMounted(true);
  }, []);
  
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Dustin Duong - Portfolio</title>
        <meta name="description" content="Dustin Duong's personal portfolio website showcasing software development projects and professional experience" />
      </head>
      <body className={inter.className} style={{ margin: 0, backgroundColor: theme.custom.content.background }}>
        <Providers>
          <Box sx={{ 
            display: 'flex',
            minHeight: '100vh',
            color: theme.custom.content.primary,
            paddingBottom: '150px',
            position: 'relative'
          }}>
            {/* Background Image */}
            <Box sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1
              }
            }}>
              <Image
                src="/background.jpg" 
                alt="Background"
                fill
                style={{ 
                  objectFit: 'cover',
                  opacity: 0.8
                }}
                priority
              />
            </Box>

            {!isMobile && <Sidebar />}
            
            {/* Mobile Menu */}
            {isMobile && (
              <MobileMenu 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(!mobileMenuOpen)} 
              />
            )}
            
            {/* Main content area */}
            <Box sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              marginLeft: isMobile ? 0 : '250px', 
              position: 'relative', 
              zIndex: 900,
              ...(isMobile && {
                transform: 'scale(0.8)',
                transformOrigin: 'top left',
                width: '125%', // Compensate for the scale to prevent horizontal scroll
                height: '125%', // Compensate for the scale to prevent vertical scroll
              })
            }}>
              <Box sx={{ 
                flex: 1,
                p: 4,
                pb: 8,
              }}>
                {children}
              </Box>
            </Box>
            
          </Box>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;