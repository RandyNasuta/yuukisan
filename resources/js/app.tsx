import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

import { ReactElement, ReactNode } from 'react';

type PageWithLayout = {
    layout?: (page: ReactElement) => ReactNode;
}

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        //Ambil komponen halaman saat ini
        const Page = props.initialPage.component as React.ComponentType & PageWithLayout;

        //Gunakan layout jika tersedia
        const layout = Page.layout ?? ((page) => page);

        root.render(layout(<App {...props} />));
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
