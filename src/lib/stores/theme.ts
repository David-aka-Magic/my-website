import { writable } from 'svelte/store';
import { DEFAULT_THEME_ID } from '$lib/theme/constants';
import type { ThemeId } from '$lib/theme/types';

export const themeStore = writable<ThemeId>(DEFAULT_THEME_ID);

export function initializeTheme() {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') as ThemeId | null;
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (systemDark ? 'dark' : DEFAULT_THEME_ID);
        applyTheme(initialTheme);
    }
}

export function applyTheme(theme: ThemeId) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeStore.set(theme);
}
