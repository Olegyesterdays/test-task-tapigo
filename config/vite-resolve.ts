// build/vite-resolve.ts
import { fileURLToPath, URL } from 'url';

export default {
  alias: {
    '@': fileURLToPath(new URL('../src', import.meta.url)),
    '@store': fileURLToPath(new URL('../src/store', import.meta.url)),
    '@api': fileURLToPath(new URL('../src/api/index', import.meta.url)),
    '@myTypes': fileURLToPath(new URL('../src/types', import.meta.url))
  },
  extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
};
