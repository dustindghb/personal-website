// Sidebar.tsx
'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { Box, List, ListItem, ListItemText, ListItemButton, Typography } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';
import { NavItem, siteStructure } from '@/config/navigation';
import { useSafeAppTheme } from '../app/providers';

// Type guard to check if an item has children
function hasChildren(item: NavItem): item is NavItem & { children: NavItem[] } {
  return Array.isArray(item.children) && item.children.length > 0;
}

// Interface for FileTreeItem component props
interface FileTreeItemProps {
  item: NavItem;
  level?: number;
  onSelect: (path: string) => void;
  isActive: boolean;
}

// FileTreeItem component using memo for performance
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
    onSelect(item.id);
  }, [onSelect, item.id]);
  
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  // Compute background color
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
          sx={{
            pl: 2,
            color: theme.custom.sidebar.text,
            backgroundColor,
            '&:hover': {
              backgroundColor: theme.custom.sidebar.itemHover,
            },
            '&.Mui-selected': {
              backgroundColor: theme.custom.sidebar.itemSelected,
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
      
      {/* Render children if they exist */}
      {hasChildren(item) && item.children.map((child) => (
        <FileTreeItem 
          key={child.id} 
          item={child} 
          level={level + 1}
          onSelect={onSelect}
          isActive={false} // Will be overridden by SidebarContent
        />
      ))}
    </>
  );
});

// Separate component for sidebar content to handle the active path logic
function SidebarContent() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useSafeAppTheme();
  
  // Define handleSelect callback
  const handleSelect = useCallback((path: string) => {
    router.push(path);
  }, [router]);
  
  // Recursively render FileTreeItem with correct active state
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
        <ListItemText 
          primary="Example Commands:"
          secondary={
            <>
              <Typography component="span" variant="body2" color="text.secondary" sx={{ 
                display: 'block', 
                color: theme.custom.sidebar.text, 
                opacity: 0.7,
                fontFamily: 'monospace',
                fontSize: '0.85rem'
              }}>
                to go back:
                <Box component="span" sx={{ display: 'block', ml: 1 }}>cd ..</Box>
                
                to navigate to a page:
                <Box component="span" sx={{ display: 'block', ml: 1 }}>cd experience/scu-schedule-helper</Box>
                <Box component="span" sx={{ display: 'block', ml: 1 }}>cd about</Box>
              </Typography>
            </>
          }
        />
      </Box>
    </>
  );
}

// Main Sidebar component
export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useSafeAppTheme();

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Simple visibility based on mounted state
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