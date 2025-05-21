<script>
	import '$lib/styles/bootstrap.css';
	import '$lib/styles/style.scss';

	export const prerender = true;
	// export const trailingSlash = 'always';

	let { children } = $props();
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation />
<div class="h-100">
	{@render children()}
</div>
<Footer />
