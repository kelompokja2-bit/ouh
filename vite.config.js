// vite.config.js
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        kordinator: resolve(__dirname, 'kordinator.html'),
        keeper: resolve(__dirname, 'keeper.html'),
      },
    },
  },
});