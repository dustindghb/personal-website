'use client';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const Terminal = dynamic(() => import('@/components/Terminal'), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, backgroundColor: '#444444' }}>
        <Box sx={{ 
          display: 'flex',
          minHeight: '100vh',
          color: 'white',
          paddingBottom: '150px', 
        }}>
          <Sidebar />
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '250px', 
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
          <Terminal />
        </Box>
      </body>
    </html>
  );
}