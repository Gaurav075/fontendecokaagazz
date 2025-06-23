import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/fontendecokaagazz/', // 👈 this is crucial for GitHub Pages
//   plugins: [react()],
// })

export default defineConfig({
  base: './', // ✅ correct
  plugins: [react()],
});
