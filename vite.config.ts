import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  base: '/portfolio/', // Correct base path for GitHub Pages
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      // add any other aliases you had before if needed
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist', // Match GitHub Pages deployment
  },
  server: {
    port: 3000,
    open: true,
  },
})
