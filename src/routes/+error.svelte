<script>
	import { page } from '$app/state';
	import { emojis } from '../components/emojis.js';
</script>

<svelte:head>
	<title>ERROR {page.status} - {page.error.message}</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div id="notfound">
	<div class="notfound">
		<div class="notfound-404">
			<h1>Oops!</h1>
			{emojis[page.status] ?? emojis[500]}
			<h2>ERROR {page.status}: {page.error.message}</h2>
		</div>
		<p>
			Uh-oh! It seems the page you're looking for has either been removed, relocated, or may not
			exist at all. Before you venture further, double-check the URL in your browser. If all seems
			well, consider navigating back to our homepage to explore anew. Thanks for your understanding!
		</p>
		<a href="/">Go To Homepage</a>
	</div>
</div>

<style>
	#notfound {
		height: 100svh;
		display: grid;
		place-content: center;
	}
	.notfound {
		max-width: 600px;
		width: 100%;
		text-align: center;
	}
	.notfound-404 h1 {
		font-size: 4rem;
		margin: 0 0 1rem 0;
	}
	.notfound p {
		line-height: 1.5rem;
		font-size: 1rem;
	}
	.notfound a {
		font-size: 1rem;
		text-decoration: none;
		text-transform: uppercase;
		background: #333;
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 1rem;
		color: #fff;
		font-weight: 700;
		box-shadow: 0 4px 15px -5px #333;
	}
</style>
