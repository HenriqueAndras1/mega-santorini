import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Plugins que o Vite vai usar durante o desenvolvimento e build
  plugins: [
    react(),        // Suporte a JSX/TSX com React
    tailwindcss(),  // Suporte ao Tailwind CSS via Vite plugin
  ],

  // Configurações do servidor local (vite dev)
  server: {
    open: true, // Abre automaticamente no navegador ao rodar `npm run dev`
  },
})
