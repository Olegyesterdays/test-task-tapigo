import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tsconfigPaths from 'vite-tsconfig-paths';

export default [vue(), vueDevTools(), tsconfigPaths()];
