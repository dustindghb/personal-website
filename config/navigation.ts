// Generic type for tree-like structures
export type Tree<T> = T & {
  children?: Tree<T>[];
};

// Base interface for all navigation items
export interface BaseNavItem {
  id: string;
  label: string;
  isFolder: boolean;
  clickable?: boolean; // Whether the item should be clickable in the sidebar
  metadata?: Record<string, unknown>;
}

// Type for nav items without children
export interface LeafNavItem extends BaseNavItem {
  isFolder: false;
  children?: never;
}

// Type for nav items with children
export interface FolderNavItem extends BaseNavItem {
  isFolder: true;
  children: NavItem[];
}

// Union type for all nav items
export type NavItem = LeafNavItem | FolderNavItem;

// Utility type to extract path segments from a site structure
export type ExtractPaths<T extends NavItem> = T extends { id: infer P extends string }
  ? P | (T extends { children: infer C extends NavItem[] }
      ? ExtractPaths<C[number]>
      : never)
  : never;

// Mapping type for paths
export type PathMap = {
  [key: string]: string[];
};

// Recursive type for deep readonly objects
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Array<infer U>
    ? ReadonlyArray<DeepReadonly<U>>
    : T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

// Type for path validation function
export type PathValidator = (path: string) => boolean;

// Site structure with typed hierarchy
export const siteStructure: FolderNavItem = {
  id: '/',
  label: 'Home',
  isFolder: true,
  children: [
    {
      id: '/about',
      label: 'About',
      isFolder: false,
    },
    {
      id: '/experience/timeline',
      label: 'Timeline',
      isFolder: false,
    },
    {
      id: '/work-experience',
      label: 'Work Experience',
      isFolder: true,
      clickable: false,
      children: [
        {
          id: '/work-experience/stage4solutions',
          label: 'Stage4Solutions',
          isFolder: false,
        },
      ],
    },
    {
      id: '/project-experience',
      label: 'Project Experience',
      isFolder: true,
      clickable: false,
      children: [
        {
          id: '/project-experience/regulations-gov-tool',
          label: 'Regulations.gov Tool',
          isFolder: false,
        },
        {
          id: '/project-experience/scu-schedule-helper',
          label: 'SCU-Schedule-Helper',
          isFolder: false,
        },
        {
          id: '/project-experience/personal-website',
          label: 'Personal-Website',
          isFolder: false,
        },
        {
          id: '/project-experience/dice-animations',
          label: 'Dice-Animations',
          isFolder: false,
        },
        {
          id: '/project-experience/dstation',
          label: 'DStation',
          isFolder: false,
        },
      ],
    },
    {
      id: '/resume',
      label: 'Resume',
      isFolder: false,
    },
  ],
};

// Valid paths with typed mapping
export const validPaths: PathMap = {
  'about': ['about'],
  'experience/timeline': ['experience', 'timeline'],
  'work-experience/stage4solutions': ['work-experience', 'stage4solutions'],
  'project-experience/regulations-gov-tool': ['project-experience', 'regulations-gov-tool'],
  'project-experience/scu-schedule-helper': ['project-experience', 'scu-schedule-helper'],
  'project-experience/personal-website': ['project-experience', 'personal-website'],
  'project-experience/dice-animations': ['project-experience', 'dice-animations'],
  'project-experience/dstation': ['project-experience', 'dstation'],
  'resume': ['resume']
};

// Type guard for checking if a path segment exists
export function isValidPathSegment(segment: string): boolean {
  return Object.keys(validPaths).includes(segment);
}

// Generic function to find a nav item by path
export function findNavItemByPath<T extends NavItem>(
  structure: T,
  path: string
): NavItem | null {
  if (structure.id === path) {
    return structure;
  }
  
  if (structure.isFolder && structure.children) {
    for (const child of structure.children) {
      const found = findNavItemByPath(child, path);
      if (found) return found;
    }
  }
  
  return null;
}

// Convert a path string to segments
export function pathToSegments(path: string): string[] {
  return path === '/' ? [] : path.split('/').filter(Boolean);
}

// Utility function to get all valid paths from a site structure
export function extractAllPaths(structure: NavItem): string[] {
  const paths: string[] = [structure.id];
  
  if (structure.isFolder && structure.children) {
    for (const child of structure.children) {
      paths.push(...extractAllPaths(child));
    }
  }
  
  return paths;
}

// Create a frozen (immutable) version of the site structure
export const immutableSiteStructure: DeepReadonly<FolderNavItem> = 
  Object.freeze(JSON.parse(JSON.stringify(siteStructure)));

// Export path validation function
export const validatePath: PathValidator = (path: string): boolean => {
  return isValidPathSegment(path.replace(/^\/+|\/+$/g, '').toLowerCase());
};