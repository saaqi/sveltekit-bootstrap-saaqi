<script>
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
	<title>Blog - Svelte + Bootstrap by Saaqi</title>
	<meta
		name="description"
		content="This template should help get you started developing with Sveltekit with bootstrap."
	/>
</svelte:head>

<Navigation />
<main class="mt-3">
	<div class="container">
		<h1>Blog</h1>
		<p>Welcome to the blog page!</p>
		<p>Here you can find various articles and posts.</p>
		<p>Stay tuned for more updates!</p>
		<slot></slot>
		<p>End of blog content.</p>
		<p>Thank you for visiting!</p>
		<slot name="footer"></slot>
	</div>
</main>
