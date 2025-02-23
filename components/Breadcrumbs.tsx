'use client';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from '@mui/material';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <Box mb={3}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" underline="hover">
          root
        </Link>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;

          return isLast ? (
            <Typography color="text.primary" key={path}>
              {segment}
            </Typography>
          ) : (
            <Link color="inherit" href={path} key={path} underline="hover">
              {segment}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
}
