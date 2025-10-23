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
  server: {
    open: "/",
  },
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    // https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-solid for SSR set up
    // solidPlugin({ ssr: true }),
    solidPlugin(),
    tsconfigPaths()
  ],
  // server: {
  //   port: 3000,
  // },
  build: {
    target: 'esnext',
    minify: true,
  },
  test: {
    watch: false,
    globals: true, // Use global test functions like describe, it, expect
    environment: 'happy-dom',
    css: false, // Enable CSS support
    server: {
      deps: {
        inline: ["@solidjs/testing-library", "@solidjs/router"],
      },
    },
    include: ['**/*.test.jsx', '**/*.test.tsx'], // Include test files
    exclude: ['node_modules', 'dist'], // Exclude certain directories
  },
});
