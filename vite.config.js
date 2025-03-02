import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'static/js/dist'), // Folder wyjściowy
    rollupOptions: {
      input: {
        profile_menu: path.resolve(__dirname, 'static/js/input_profile.js'),
        login_modal: path.resolve(__dirname, 'static/js/input_login_modal.js'),
        accessibility: path.resolve(__dirname, 'static/js/input_accessibillity.js'),
        search: path.resolve(__dirname, 'static/js/input_search.js'),

      },
      output: {
        format: 'es', // Użyj formatu ESM (ECMAScript Modules), który działa w przeglądarce
        entryFileNames: '[name].min.js',
        chunkFileNames: 'chunks/[name]-[hash].js', // Przechowuje dynamicznie ładowane moduły w podfolderze
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    minify: 'terser', // Minifikacja kodu
  },
});