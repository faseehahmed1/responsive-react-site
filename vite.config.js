import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/responsive-react-site',
  plugins: [react()],
  server: {
    port: 8000,
  },
})
