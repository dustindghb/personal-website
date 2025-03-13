// Breadcrumbs.tsx
'use client';
import { useMemo, memo, FC } from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useAppTheme } from '../app/providers';
import { NavItem, siteStructure } from '@/config/navigation';
// Removed unused import: validPaths

// Type-safe function to get breadcrumb label from nav structure
type PathSegment = string;
type BreadcrumbItem = {
  segment: PathSegment;
  path: string;
  label: string;
  isLast: boolean;
};

// Type guard to check if nav item has children
function hasChildren(item: NavItem): item is NavItem & { children: NavItem[] } {
  return Array.isArray(item.children) && item.children.length > 0;
}

// Generic utility class for navigation operations
class BreadcrumbUtils {
  // Find Nav item by path with proper return typing
  static findNavItemByPath(
    root: NavItem, 
    path: string, 
    exactMatch: boolean = true
  ): NavItem | null {
    // Exact path match
    if (root.id === path) return root;
    
    // Check children if available
    if (hasChildren(root)) {
      for (const child of root.children) {
        const found = this.findNavItemByPath(child, path, exactMatch);
        if (found) return found;
      }
    }
    
    // If not exact matching, check if path is a parent of the target
    if (!exactMatch && path.startsWith(root.id + '/')) {
      return root;
    }
    
    return null;
  }
  
  // Get full path information with proper typing
  static getBreadcrumbsForPath(
    path: string
  ): Array<BreadcrumbItem> {
    // Start with root
    const result: BreadcrumbItem[] = [
      { segment: 'root', path: '/', label: 'root', isLast: path === '/' }
    ];
    
    // Skip processing if we're at root
    if (path === '/') return result;
    
    // Split the path and build breadcrumbs
    const segments = path.split('/').filter(Boolean);
    
    // Process each segment
    segments.forEach((segment, index) => {
      const isLastSegment = index === segments.length - 1;
      const currentPath = '/' + segments.slice(0, index + 1).join('/');
      
      // Try to find a matching label from the nav structure
      let label = segment; // Default label is the segment itself
      
      // Check if we can find a more descriptive label from the nav tree
      const navItem = this.findNavItemByPath(siteStructure, currentPath);
      if (navItem) {
        label = navItem.label;
      }
      
      // Add to breadcrumbs
      result.push({
        segment,
        path: currentPath,
        label,
        isLast: isLastSegment
      });
    });
    
    return result;
  }
}

// Props interface with optional customization
interface BreadcrumbsProps {
  separator?: string;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  showRoot?: boolean;
}

// Create component with default props
const Breadcrumbs: FC<BreadcrumbsProps> = ({
  separator = '/',
  maxItems = 8,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  showRoot = true
}) => {
  const pathname = usePathname();
  const { theme } = useAppTheme();
  
  // Memoize breadcrumb items for performance
  const breadcrumbs = useMemo(() => {
    return BreadcrumbUtils.getBreadcrumbsForPath(pathname);
  }, [pathname]);
  
  // Apply root visibility filter
  const visibleBreadcrumbs = useMemo(() => {
    return showRoot ? breadcrumbs : breadcrumbs.slice(1);
  }, [breadcrumbs, showRoot]);

  return (
    <Box mb={3}>
      <MUIBreadcrumbs 
        aria-label="breadcrumb"
        separator={separator}
        maxItems={maxItems}
        itemsBeforeCollapse={itemsBeforeCollapse}
        itemsAfterCollapse={itemsAfterCollapse}
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: theme.palette.text.secondary
          }
        }}
      >
        {visibleBreadcrumbs.map((item) => {
          return item.isLast ? (
            <Typography 
              color="text.primary" 
              key={item.path}
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 'medium'
              }}
            >
              {item.label}
            </Typography>
          ) : (
            <Link 
              color="inherit" 
              href={item.path} 
              key={item.path} 
              underline="hover"
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  color: theme.palette.primary.main
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

// Use memo for performance optimization
export default memo(Breadcrumbs);