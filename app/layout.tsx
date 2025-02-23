import { Inter } from 'next/font/google';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Breadcrumbs from '../components/Breadcrumbs';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box display="flex" minHeight="100vh">
          <Sidebar />
          <Box component="main" flex={1} p={3}>
            <Breadcrumbs />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
