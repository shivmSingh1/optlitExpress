import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		outDir: 'dist', // Ensure Vite's build output goes into the 'dist' folder
		rollupOptions: {
			input: {
				main: 'index.html',  // Your landing page
			},
		},
	},
});
