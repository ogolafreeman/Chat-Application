// Importing the defineConfig function from the Vite library
import { defineConfig } from 'vite';

// Importing the React plugin for Vite
import react from '@vitejs/plugin-react';

// Exporting the Vite configuration using defineConfig
export default defineConfig({
  // Adding the React plugin to the Vite configuration
  plugins: [react()],
});
