import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tudushka/widgets': path.resolve(__dirname, 'src/widgets'),
      '@tudushka/shared': path.resolve(__dirname, 'src/shared'),
      '@tudushka/pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});
