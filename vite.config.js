import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        host: '192.168.0.19', // IP de tu servidor local
        port: 8002, // Puerto que estás usando
        hmr: {
            host: '192.168.0.19',
        },
    },
});
