<script>
	import Counter from '/src/components/Counter.svelte';
	import Logos from '/src/components/Logos.svelte';
	import Modal from '/src/components/Modal.svelte';
</script>

<svelte:head>
	<title>Svelte + Bootstrap by Saaqi</title>
	<meta
		name="description"
		content="This template should help get you started developing with Sveltekit with bootstrap."
	/>
</svelte:head>

<main class="svh-100 bg-dark text-bg-dark">
	<div class="container">
		<div class="row gap-4">
			<h1 class="h2">Welcome to SvelteKit + Bootstrap by Saaqi</h1>
			<div class="d-flex gap-5">
				<Logos />
			</div>
			<div class="w-auto">
				<div class="d-flex gap-3">
					<div style="width: 10em">
						<Counter btnStyle="secondary" />
					</div>
					<div style="width: 10em">
						<Modal
							btnTitle="Demo Modal"
							modalTitle="Demo Modal title"
							id="demoModal"
							body="Hello, I'm a modal!"
						/>
					</div>
				</div>
			</div>
			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
			</p>
		</div>
	</div>
</main>
