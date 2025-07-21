export type ThemeId = 'light' | 'dark' | 'blue' | 'green';

export interface Theme {
    id: ThemeId;
    name: string;
    icon: string;
}