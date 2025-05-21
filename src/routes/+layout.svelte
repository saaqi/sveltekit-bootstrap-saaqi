<script>
	let { children } = $props();
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navigation />
<div class="h-100">
  {@render children()}
</div>
<Footer />
