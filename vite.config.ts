import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...fs.readdirSync(process.cwd()).reduce(
        (acc, cur) => {
          acc[cur] = `/${cur}`
          return acc
        },
        {} as Record<string, string>,
      ),
    },
  },
})
