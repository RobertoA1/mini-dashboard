import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
    plugins: [angular({
        tsconfig: resolve(__dirname, 'tsconfig.app.json'),
    }),
    tailwindcss()
    ],
    root: resolve(__dirname, 'store-angular/src'),
    base: '/tienda/',
    build: {
        outDir: resolve(__dirname, 'public/tienda'),
        emptyOutDir: true,
    },
    server: {
        port: 4201,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        }
    },
});