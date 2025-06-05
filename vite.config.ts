import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self' https://apps.scsup.com:9080; frame-src https://apps.scsup.com:9080; script-src 'self' 'unsafe-inline' 'unsafe-eval' data: https://apps.scsup.com:9080; style-src 'self' 'unsafe-inline'; connect-src 'self' https://apps.scsup.com:9080; worker-src 'self' blob: data:;"
    }
  }
});