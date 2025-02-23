'use client';

import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface NavItem {
  id: string;
  label: string;
  isFolder: boolean;
  children?: NavItem[];
}

const siteStructure: NavItem = {
  id: '/',
  label: 'my-website',
  isFolder: true,
  children: [
    {
      id: '/about',
      label: 'about',
      isFolder: false,
    },
    {
      id: '/projects',
      label: 'projects',
      isFolder: true,
      children: [
        {
          id: '/projects/project1',
          label: 'project1',
          isFolder: false,
        },
        {
          id: '/projects/project2',
          label: 'project2',
          isFolder: false,
        },
      ],
    },
  ],
};

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
          borderLeft: level > 0 ? '1px dashed rgba(255, 255, 255, 0.12)' : 'none',
          ml: level > 0 ? 2 : 0,
        }}
      >
        <ListItemButton
          onClick={() => onSelect(item.id)}
          selected={isSelected}
          sx={{
            pl: level > 0 ? 2 : 1,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.Mui-selected': {
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            {item.isFolder ? <FolderIcon /> : <DescriptionIcon />}
          </ListItemIcon>
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
  const router = useRouter();

  const handleSelect = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        borderRight: 1,
        borderColor: 'divider',
        minHeight: '100vh',
      }}
    >
      <List component="nav" dense sx={{ pt: 1 }}>
        <FileTreeItem 
          item={siteStructure} 
          onSelect={handleSelect}
        />
      </List>
    </Box>
  );
}