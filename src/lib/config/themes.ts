import { writable } from 'svelte/store';

// Definición de tipos
export type Theme = {
  name: string;
  colors: {
    primary: string;
    background: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
    header: {
      background: string;
      blur: string;
    };
    structuralPattern: {
      primary: string;
      secondary: string;
      accent: string;
      opacity: string;
    };
  };
};

// Diccionario de temas
export const themesList: Record<string, Theme> = {
  theme01: {
    name: 'Dark Theme',
    colors: {
      primary: '#F98030',
      background: '#18181B',
      text: {
        primary: 'text-white',
        secondary: 'text-zinc-300',
        accent: 'text-[#F98030]'
      },
      border: {
        primary: 'border-zinc-300',
        secondary: 'border-zinc-700'
      },
      header: {
        background: 'rgba(24, 24, 27, 0.95)',
        blur: '5px'
      },
      structuralPattern: {
        primary: 'rgba(255, 255, 255, 0.12)',    // Líneas principales
        secondary: 'rgba(255, 255, 255, 0.05)',   // Líneas secundarias
        accent: 'rgba(249, 128, 48, 0.15)',       // Elementos de acento (usando el naranja)
        opacity: '0.1'
      }
    }
  },
  theme02: {
    name: 'Light Theme',
    colors: {
      primary: '#F98030',
      background: '#D1D1D1',
      text: {
        primary: 'text-zinc-900',
        secondary: 'text-zinc-700',
        accent: 'text-[#F98030]'
      },
      border: {
        primary: 'border-zinc-600',
        secondary: 'border-zinc-400/20'
      },
      header: {
        background: 'rgba(209, 209, 209, 0.95)',
        blur: '5px'
      },
      structuralPattern: {
        primary: 'rgba(0, 0, 0, 0.08)',          // Líneas principales
        secondary: 'rgba(0, 0, 0, 0.04)',        // Líneas secundarias
        accent: 'rgba(249, 128, 48, 0.12)',      // Elementos de acento
        opacity: '0.08'
      }
    }
  },
  theme03: {
    name: 'High Contrast',
    colors: {
      primary: '#F98030',
      background: '#000000',
      text: {
        primary: 'text-white',
        secondary: 'text-white',
        accent: 'text-[#F98030]'
      },
      border: {
        primary: 'border-white',
        secondary: 'border-white/20'
      },
      header: {
        background: 'rgba(0, 0, 0, 0.95)',
        blur: '5px'
      },
      structuralPattern: {
        primary: 'rgba(255, 255, 255, 0.15)',    // Líneas principales
        secondary: 'rgba(255, 255, 255, 0.08)',   // Líneas secundarias
        accent: 'rgba(249, 128, 48, 0.2)',        // Elementos de acento
        opacity: '0.12'
      }
    }
  }
};

// Store con el tema activo
export const activeTheme = writable<Theme>(themesList.theme03);

// Función para cambiar el tema
export const setTheme = (themeId: string) => {
  if (themesList[themeId]) {
    activeTheme.set(themesList[themeId]);
  }
};

// Establecer el tema inicial aquí
setTheme('theme03'); // Establece el tema por defecto 