'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Box, List, ListItem, ListItemText, ListItemButton, Typography, IconButton } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { NavItem, siteStructure } from '@/config/navigation';
import { useSafeAppTheme } from '../app/providers';
import { GitHub, LinkedIn, Code } from '@mui/icons-material';

function hasChildren(item: NavItem): item is NavItem & { children: NavItem[] } {
  return Array.isArray(item.children) && item.children.length > 0;
}

interface FileTreeItemProps {
  item: NavItem;
  level?: number;
  onSelect: (path: string) => void;
  isActive: boolean;
}

const FileTreeItem = memo(function FileTreeItem({ 
  item, 
  level = 0,
  onSelect,
  isActive
}: FileTreeItemProps) {
  const { theme } = useSafeAppTheme();
  const [isHovered, setIsHovered] = useState(false);
  
  // Event handlers
  const handleClick = useCallback(() => {
    // Only allow clicking if the item is clickable (default to true for backward compatibility)
    if (item.clickable !== false) {
      onSelect(item.id);
    }
  }, [onSelect, item.id, item.clickable]);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  const backgroundColor = isActive 
    ? theme.custom.sidebar.itemSelected 
    : isHovered 
      ? theme.custom.sidebar.itemHover 
      : 'transparent';
  
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
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          selected={isActive}
          disabled={item.clickable === false}
          sx={{
            pl: 2,
            color: item.clickable === false ? theme.custom.sidebar.text + '80' : theme.custom.sidebar.text, // 80 for 50% opacity
            backgroundColor,
            cursor: item.clickable === false ? 'default' : 'pointer',
            '&:hover': {
              backgroundColor: item.clickable === false ? 'transparent' : theme.custom.sidebar.itemHover,
            },
            '&.Mui-selected': {
              backgroundColor: theme.custom.sidebar.itemSelected,
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
        <FileTreeItem 
          key={child.id} 
          item={child} 
          level={level + 1}
          onSelect={onSelect}
          isActive={false} 
        />
      ))}
    </>
  );
});

function SidebarContent() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useSafeAppTheme();
  
  const handleSelect = useCallback((path: string) => {
    router.push(path);
  }, [router]);
  
  const renderFileTree = (item: NavItem, level = 0): React.ReactElement => {
    const isActive = pathname === item.id;
    
    return (
      <FileTreeItem 
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
      <List component="nav" dense sx={{ flex: 1 }}>
        {renderFileTree(siteStructure)}
      </List>
      
      <Box sx={{ p: 2, borderTop: `3px solid ${theme.custom.sidebar.borderColor}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
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
    </>
  );
}

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useSafeAppTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const visibility = mounted ? 'visible' : 'hidden';

  return (
    <Box sx={{ 
      width: '250px', 
      visibility,
      borderRight: `3px solid ${theme.custom.sidebar.borderColor}`,
      bgcolor: theme.custom.sidebar.background,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 950,
    }}>
      <SidebarContent />
    </Box>
  );
}