import cssnano from 'cssnano';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
const bootstrap = 'node_modules/bootstrap';
import { sveltekit } from '@sveltejs/kit/vite';
const IN_PRODUCTION = process.env.NODE_ENV === 'production';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';

export default defineConfig({
	plugins: [sveltekit()],

	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		},
		postcss: {
			plugins: IN_PRODUCTION
				? [
						purgeCSSPlugin({
							content: [
								'./src/app.html',
								'./src/**/*.{svelte,ts,js}',
								`${bootstrap}/js/dist/modal.js`,
								`${bootstrap}/js/dist/collapse.js`
							],
							safelist: [/svelte-/, /modal-/],
							defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
							keyframes: true,
							variables: true
						}),
						cssnano({
							preset: ['default', { discardComments: { removeAll: true } }]
						}),
						autoprefixer()
					]
				: []
		}
	},

	// base: './',
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
