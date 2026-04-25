import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/macrosync/', // This must match your repo name exactly
  logLevel: 'error',
  plugins: [
    base44({
      // ... keep your existing base44 settings
    }),
    react(),
  ]
});
