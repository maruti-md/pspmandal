import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pspmandal/',
  build: {
    chunkSizeWarningLimit: 1000, // You can adjust the limit as needed
  },
})
