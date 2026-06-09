export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme-preference';

/**
 * Read theme from localStorage, falling back to the portfolio's light canvas.
 */
export function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch {
    // localStorage unavailable — fall through
  }
  return 'light';
}

/**
 * Apply theme to document and persist to localStorage.
 */
export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage unavailable — silently ignore
  }
}

/**
 * Toggle between dark and light theme.
 */
export function toggleTheme(): Theme {
  const current = document.documentElement.getAttribute('data-theme') as Theme;
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}
