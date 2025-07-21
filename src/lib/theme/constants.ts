import type { Theme } from './types';

export const THEMES: Theme[] = [
  {
    id: 'light',
    name: 'Light Theme',
    icon: '☀️',
  },
  {
    id: 'dark',
    name: 'Dark Theme',
    icon: '🌙',
  },
  {
    id: 'blue',
    name: 'Blue Theme',
    icon: '🔵',
  },
  {
    id: 'green',
    name: 'Green Theme',
    icon: '🟢',
  }
];

export const DEFAULT_THEME_ID: Theme['id'] = 'light';

export const SYSTEM_DARK_THEME_MATCH = '(prefers-color-scheme: dark)';

export const SYSTEM_BLUE_THEME_MATCH = '(prefers-color-scheme: blue)';

export const SYSTEM_GREEN_THEME_MATCH = '(prefers-color-scheme: green)';