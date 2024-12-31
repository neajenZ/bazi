import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src')}`,
      '@widjets': `${path.resolve(__dirname, './src/widjets')}`,
      '@features': `${path.resolve(__dirname, './src/features')}`,
      '@entities': `${path.resolve(__dirname, './src/entities')}`,
      '@pages': `${path.resolve(__dirname, './src/pages')}`,
      '@icons': `${path.resolve(__dirname, './src/app/icons')}`,
      '@ui': `${path.resolve(__dirname, './src/app/ui')}`,
      '@providers': `${path.resolve(__dirname, './src/app/providers')}`,
    },
  },
});
