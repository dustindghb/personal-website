'use client';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

// Dynamically import components that use client-side features
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const Terminal = dynamic(() => import('@/components/Terminal'), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, backgroundColor: '#666666' }}>
        <Box sx={{ 
          display: 'flex',
          minHeight: '100vh',
          color: 'white'
        }}>
          <Sidebar />
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Box sx={{ 
              flex: 1,
              p: 4,
              pb: 8,
            }}>
              {children}
            </Box>
            <Terminal />
          </Box>
        </Box>
      </body>
    </html>
  );
}
