import { writable } from 'svelte/store';
import { themes, type Theme } from '../config/themes';

// Obtener el tema guardado en localStorage o usar 'light' por defecto
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'light';
  }
  return 'light';
};

export const currentTheme = writable<string>(getInitialTheme());

// Suscribirse a cambios y guardar en localStorage
currentTheme.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});

// Helper para obtener el tema actual
export const getTheme = (): Theme => themes[getInitialTheme()]; 