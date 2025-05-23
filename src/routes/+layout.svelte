<script>
	import '$lib/styles/bootstrap.css';
	import '$lib/styles/style.scss';

	const { children } = $props();
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LoadingAnimation from '$lib/components/LoadingAnimation.svelte';
</script>

<LoadingAnimation />
<Navigation />

<div class="svh-100">
	{@render children()}
</div>
<Footer />
