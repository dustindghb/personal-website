'use client';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import Terminal from '../components/Terminal';

const inter = Inter({ subsets: ['latin'] });

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
              pb: 8, // Add padding to prevent content from being hidden behind terminal
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
