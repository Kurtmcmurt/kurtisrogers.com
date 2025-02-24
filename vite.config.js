import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      "images": path.resolve(__dirname, "./images"),
      "css": path.resolve(__dirname, "./css"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    tsconfigPaths()
  ],
  // server: {
  //   port: 3000,
  // },
  build: {
    target: 'esnext',
  },
  test: {
    watch: false,
    globals: true, // Use global test functions like describe, it, expect
    environment: 'jsdom', // Use jsdom for DOM testing
    css: true, // Enable CSS support
    server: {
      deps: {
        inline: ["@solidjs/testing-library", "@solidjs/router"],
      },
    },
  },
});
