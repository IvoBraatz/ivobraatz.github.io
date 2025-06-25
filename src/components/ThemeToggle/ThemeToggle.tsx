'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Icon from '../Icon/Icon';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
    >
      <Icon 
        icon={theme === 'dark' ? Sun : Moon} 
        size={24} 
        color="currentColor"
      />
    </button>
  );
} 