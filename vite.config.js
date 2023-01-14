import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  /*
    server: {
        origin: 'http://127.0.0.1:8001',
        port: 3001,
      },
    */
      define: {
        "global": {},
      },
      plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            //input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
      ],
      build: {
        rollupOptions: {
          external: ['video.js'],
        }
      }
});
