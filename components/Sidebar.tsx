'use client';
import { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { NavItem, siteStructure } from '@/config/navigation';

const FileTreeItem = ({ 
  item, 
  level = 0,
  onSelect 
}: { 
  item: NavItem; 
  level?: number;
  onSelect: (path: string) => void;
}) => {
  const pathname = usePathname();
  const isSelected = pathname === item.id;

  return (
    <>
      <ListItem 
        disablePadding 
        sx={{ 
          display: 'block',
          pl: level * 3,
        }}
      >
        <ListItemButton
          onClick={() => onSelect(item.id)}
          selected={isSelected}
          sx={{
            pl: 2,
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
            },
          }}
        >
          <ListItemText 
            primary={item.label}
            primaryTypographyProps={{
              sx: {
                fontSize: '0.9rem',
                fontFamily: 'monospace',
              }
            }}
          />
        </ListItemButton>
      </ListItem>
      {item.children?.map((child) => (
        <FileTreeItem 
          key={child.id} 
          item={child} 
          level={level + 1}
          onSelect={onSelect}
        />
      ))}
    </>
  );
};

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch by not rendering anything on server
  }

  const handleSelect = (path: string) => {
    router.push(path);
  };

  return (
    <Box sx={{ 
      width: '250px', 
      borderRight: '1px solid rgba(255,255,255,0.3)',
      bgcolor: '#666666',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <List component="nav" dense sx={{ flex: 1 }}>
        <FileTreeItem 
          item={siteStructure} 
          onSelect={handleSelect}
        />
      </List>
      <Box sx={{ p: 2, borderTop: '1px solid rgba(255,255,255,0.3)' }}>
        <ListItemText 
          primary="Available Commands:"
          secondary={
            <>
              cd ..<br />
              cd projects/scu-schedule-helper
            </>
          }
          secondaryTypographyProps={{
            sx: { color: 'rgba(255,255,255,0.7)' }
          }}
        />
      </Box>
    </Box>
  );
}