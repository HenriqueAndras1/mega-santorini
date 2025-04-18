import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/mega-santorini/', // Adicione esta linha
  server: {
    open: true, // Isso faz abrir automaticamente no navegador padrão
  }
})
