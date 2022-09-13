import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../public",
  plugins: [svelte({
    preprocess: [sveltePreprocess({ postcss: true })]
  })],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $assets: path.resolve("./src/assets")
    }
  }
})
