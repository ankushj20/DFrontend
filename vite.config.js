import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    host: true, // ✅ Ensure it binds to the right host
    port:  5173,
  },
  plugins: [react()],
  
})
