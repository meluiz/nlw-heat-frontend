import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@ui',
        replacement: path.resolve(__dirname, 'src/ui')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@media',
        replacement: path.resolve(__dirname, 'src/media')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services')
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, 'src/contexts')
      }
    ]
  }
})
