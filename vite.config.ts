import { defineConfig } from 'vite';

import plugins from './config/vite-plugins';
import resolve from './config/vite-resolve';
import server from './config/vite-server';

// https://vite.dev/config/
export default defineConfig({
  plugins,
  resolve,
  server
});
