import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit()
	],

	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	},

	base: './',
	server: {
		port: 3000
	},

	build: {
		// outDir: "./docs",
		outDir: './build',
		emptyOutDir: true,
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false
			}
		}
	}
});
