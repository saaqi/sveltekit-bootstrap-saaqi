import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import webfontDownload from 'vite-plugin-webfont-dl';
const IN_PRODUCTION = process.env.NODE_ENV === 'production';
import htmlPurge from 'vite-plugin-purgecss';
const bootstrap = 'node_modules/bootstrap';

export default defineConfig({
	plugins: [
		sveltekit(),
		htmlPurge({
			content: [
				'./src/**/*.html',
				'./src/**/*.js',
				'./src/**/*.svelte',
				// --- Import only the required components.
				// `${bootstrap}/js/dist/alert.js`,
				// `${bootstrap}/js/dist/base-component.js`,
				// `${bootstrap}/js/dist/button.js`,
				// `${bootstrap}/js/dist/carousel.js`,
				// `${bootstrap}/js/dist/collapse.js`,
				// `${bootstrap}/js/dist/dropdown.js`,
				`${bootstrap}/js/dist/modal.js`
				// `${bootstrap}/js/dist/offcanvas.js`,
				// `${bootstrap}/js/dist/popover.js`,
				// `${bootstrap}/js/dist/scrollspy.js`,
				// `${bootstrap}/js/dist/tab.js`,
				// `${bootstrap}/js/dist/toast.js`,
				// `${bootstrap}/js/dist/tooltip.js`,
			],
			whitelistPatterns: [/svelte-/, /fa-icon/],
			safelist: [/svelte-/, /modal-/],
			defaultExtractor(content) {
				const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
				return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
			},
			keyframes: true,
			variables: true
		}),

		/* ## Download Google Fonts and attach them with production build for offline use */
		IN_PRODUCTION &&
		webfontDownload([
			'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
		]),
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
		// outDir: './build',
		emptyOutDir: true,
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false
			}
		}
	}
});
