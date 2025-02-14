import type { ComponentType } from 'svelte';
import NewsFullSection from '$lib/components/NewsFullSection.svelte';
import Disciplines from '$lib/components/Disciplines.svelte';
import AboutSection from '$lib/components/AboutSection.svelte';
import Proyectos from '$lib/components/Proyectos.svelte';

type RouteConfig = {
    component: ComponentType;
    title: string;
    description?: string;
};

export const routes: Record<string, RouteConfig> = {
    'servicios': {
        component: Disciplines,
        title: 'Nuestros Servicios',
        description: 'Servicios de ingeniería estructural'
    },
    'nosotros': {
        component: AboutSection,
        title: 'Sobre Nosotros',
        description: 'Conoce más sobre AC Ingeniería'
    },
    'portafolio': {
        component: Proyectos,
        title: 'Nuestros Proyectos',
        description: 'Portafolio de proyectos realizados'
    },
    'noticias': {
        component: NewsFullSection,
        title: 'Noticias',
        description: 'Últimas noticias y actualizaciones'
    }
};