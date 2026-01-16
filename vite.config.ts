import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setUpTests.ts', //IMPORTANTE
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      all: true,
      exclude: ['node_modules/', 'tests/'],
      include: ['src/**/*.{ts,tsx}'],
    },
  },
})

export default config
