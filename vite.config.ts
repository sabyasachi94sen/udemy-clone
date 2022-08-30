/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
// import { defineConfig,  } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'




// resolve absolute path
import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@': r('./src/'),
  '@public': r('./public/'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    globalSetup: ['./setup-test-env.js'],
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup-tests.ts'],
    exclude: [...configDefaults.exclude, '**/*.e2e.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], // skip e2e tests
    // reporters: ['verbose'],
  },
  resolve: {
    alias
  },


})
