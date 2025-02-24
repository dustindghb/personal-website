export interface NavItem {
  id: string;
  label: string;
  isFolder: boolean;
  children?: NavItem[];
}

export interface PathMap {
  [key: string]: string[];
}

export const siteStructure: NavItem = {
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
      id: '/projects',
      label: 'Projects',
      isFolder: true,
      children: [
        {
          id: '/projects/vira-poc',
          label: 'Vira-POC',
          isFolder: false,
        },
        {
          id: '/projects/scu-schedule-helper',
          label: 'SCU-Schedule-Helper',
          isFolder: false,
        },
        {
          id: '/projects/viginere-cypher',
          label: 'Viginere-Cypher',
          isFolder: false,
        },
        {
          id: '/projects/dice-animations',
          label: 'Dice-Animations',
          isFolder: false,
        },
        {
          id: '/projects/personal-website',
          label: 'Personal-Website',
          isFolder: false,
        },
      ],
    },
    {
      id: '/reflections',
      label: 'Reflections',
      isFolder: false,
    },
  ],
};

export const validPaths: PathMap = {
  'about': ['about'],
  'projects': ['projects'],
  'projects/vira-poc': ['projects', 'vira-poc'],
  'projects/scu-schedule-helper': ['projects', 'scu-schedule-helper'],
  'projects/viginere-cypher': ['projects', 'viginere-cypher'],
  'projects/dice-animations': ['projects', 'dice-animations'],
  'reflections': ['reflections']
};