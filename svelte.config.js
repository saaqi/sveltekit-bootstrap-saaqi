// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { sveltePreprocess } from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// If you are using GitHub Pages, set the base path to your repository name.
			/* For example, if your repository is named "sveltekit-bootstrap-saaqi",
			 	  set the base path to "/sveltekit-bootstrap-saaqi". */
			base: '/sveltekit-bootstrap-saaqi'
		}
	}
};

export default config;
