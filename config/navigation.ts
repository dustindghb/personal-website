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
      id: '/experience',
      label: 'Experience',
      isFolder: true,
      children: [
        {
          id: '/experience/scu-schedule-helper',
          label: 'SCU-Schedule-Helper',
          isFolder: false,
        },
        {
          id: '/experience/vira-poc',
          label: 'Vira-POC',
          isFolder: false,
        },
        {
          id: '/experience/viginere-cypher',
          label: 'Viginere-Cypher',
          isFolder: false,
        },
        {
          id: '/experience/dice-animations',
          label: 'Dice-Animations',
          isFolder: false,
        },
        {
          id: '/experience/personal-website',
          label: 'Personal-Website',
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

export const validPaths: PathMap = {
  'about': ['about'],
  'experience': ['experience'],
  'experience/vira-poc': ['experience', 'vira-poc'],
  'experience/scu-schedule-helper': ['experience', 'scu-schedule-helper'],
  'experience/viginere-cypher': ['experience', 'viginere-cypher'],
  'experience/dice-animations': ['experience', 'dice-animations'],
  'resume': ['resume']
};