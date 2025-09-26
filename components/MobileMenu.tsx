'use client';
import React from 'react';
import { 
  Box, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton,
  Typography,
  Divider
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Code, GitHub, LinkedIn } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { NavItem, siteStructure } from '@/config/navigation';
import { useSafeAppTheme } from '../app/providers';

function hasChildren(item: NavItem): item is NavItem & { children: NavItem[] } {
  return Array.isArray(item.children) && item.children.length > 0;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileNavItemProps {
  item: NavItem;
  level?: number;
  onSelect: (path: string) => void;
  isActive: boolean;
}

function MobileNavItem({ item, level = 0, onSelect, isActive }: MobileNavItemProps): React.ReactElement {
  const { theme } = useSafeAppTheme();
  
  const handleClick = () => {
    if (item.clickable !== false) {
      onSelect(item.id);
    }
  };

  return (
    <>
      <ListItem disablePadding sx={{ pl: level * 2 }}>
        <ListItemButton
          onClick={handleClick}
          disabled={item.clickable === false}
          sx={{
            pl: 2,
            color: item.clickable === false ? theme.custom.sidebar.text + '80' : theme.custom.sidebar.text,
            backgroundColor: isActive ? theme.custom.sidebar.itemSelected : 'transparent',
            '&:hover': {
              backgroundColor: item.clickable === false ? 'transparent' : theme.custom.sidebar.itemHover,
            },
            '&.Mui-disabled': {
              opacity: 0.6,
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
      
      {hasChildren(item) && item.children.map((child) => (
        <MobileNavItem 
          key={child.id}
          item={child} 
          level={level + 1}
          onSelect={onSelect}
          isActive={false}
        />
      ))}
    </>
  );
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme } = useSafeAppTheme();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleSelect = (path: string) => {
    router.push(path);
    onClose(); // Close menu after navigation
  };

  const renderNavItems = (item: NavItem, level = 0): React.ReactElement => {
    const isActive = pathname === item.id;
    
    return (
      <MobileNavItem 
        key={item.id}
        item={item} 
        level={level}
        onSelect={handleSelect}
        isActive={isActive}
      />
    );
  };

  return (
    <>
      {/* Hamburger Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 1000,
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
          },
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: theme.custom.sidebar.background,
            borderRight: `3px solid ${theme.custom.sidebar.borderColor}`,
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Navigation Items */}
          <List component="nav" dense sx={{ flex: 1, pt: 8 }}>
            {renderNavItems(siteStructure)}
          </List>
          
          <Divider sx={{ borderColor: theme.custom.sidebar.borderColor }} />
          
          {/* Footer */}
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  fontFamily: 'monospace',
                  fontSize: '0.75rem',
                  color: theme.custom.sidebar.text,
                  opacity: 0.7,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Code fontSize="inherit" />
                Designed by Dustin Duong
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                href="https://github.com/dustindghb" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                size="small"
                sx={{ 
                  color: theme.custom.sidebar.text,
                  opacity: 0.7,
                  padding: '4px',
                  '&:hover': { 
                    opacity: 1,
                    backgroundColor: theme.custom.sidebar.itemHover 
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
                  color: theme.custom.sidebar.text,
                  opacity: 0.7,
                  padding: '4px',
                  '&:hover': { 
                    opacity: 1,
                    backgroundColor: theme.custom.sidebar.itemHover 
                  }
                }}
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
