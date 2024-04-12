import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': { // make it so every url start with "/api" will use the target
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
