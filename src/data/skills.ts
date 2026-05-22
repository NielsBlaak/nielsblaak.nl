export interface Skill {
  name: string;
  color: string;
  iconUrl: string;
}

export const SKILLS_MAP: Record<string, Skill> = {
  react:      { name: 'React',       color: '#61DAFB', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB' },
  nextjs:     { name: 'Next.js',     color: '#000000', iconUrl: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  typescript: { name: 'TypeScript',  color: '#3178C6', iconUrl: 'https://cdn.simpleicons.org/typescript/3178C6' },
  tailwind:   { name: 'Tailwind',    color: '#06B6D4', iconUrl: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  nodejs:     { name: 'Node.js',     color: '#339933', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  git:        { name: 'Git',         color: '#F05032', iconUrl: 'https://cdn.simpleicons.org/git/F05032' },
  html:       { name: 'HTML',        color: '#E34F26', iconUrl: 'https://cdn.simpleicons.org/html5/E34F26' },
  css:        { name: 'CSS',         color: '#1572B6', iconUrl: 'https://cdn.simpleicons.org/css/1572B6' },
  npm:        { name: 'npm',         color: '#CB3837', iconUrl: 'https://cdn.simpleicons.org/npm/CB3837' },
  azure:      { name: 'Azure',       color: '#0078D4', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  firebase:   { name: 'Firebase',    color: '#DD2C00', iconUrl: 'https://cdn.simpleicons.org/firebase/DD2C00' },
  angular:    { name: 'Angular',     color: '#DD0031', iconUrl: 'https://cdn.simpleicons.org/angular/DD0031' },
  capacitor:  { name: 'Capacitor',   color: '#119EFF', iconUrl: 'https://cdn.simpleicons.org/capacitor/119EFF' },
  storybook:  { name: 'Storybook',   color: '#FF4785', iconUrl: 'https://cdn.simpleicons.org/storybook/FF4785' },
  jest:       { name: 'Jest',        color: '#C21325', iconUrl: 'https://cdn.simpleicons.org/jest/C21325' },
  vercel:     { name: 'Vercel',      color: '#000000', iconUrl: 'https://cdn.simpleicons.org/vercel/000000' },
};
