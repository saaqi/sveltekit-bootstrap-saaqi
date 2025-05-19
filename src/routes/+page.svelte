<script>
	import Counter from '/src/components/Counter.svelte';
	import Logos from '/src/components/Logos.svelte';
	import Modal from '/src/components/Modal.svelte';
	import { onMount } from 'svelte';

	let hrefLocation = '';
	onMount(() => {
		hrefLocation = window.location.href;
	});
</script>

<svelte:head>
	<title>Svelte + Bootstrap by Saaqi</title>
	<meta
		name="description"
		content="This template should help get you started developing with Sveltekit with bootstrap."
	/>
</svelte:head>

<main class="svh-100">
	<div class="container">
		<div class="row gap-4">
			<h1 class="h2">Welcome to SvelteKit + Bootstrap by Saaqi</h1>

			<div class="d-flex gap-5">
				<Logos />
			</div>

			<div class="mb-5 col-xl-4 col-md-6">
				<div class="mb-3 d-flex justify-content-between gap-3">
					<Counter btnStyle="secondary" />
					<Modal
						id="modal-demo"
						btnTitle="Modal Demo"
						modalTitle="Cat's Diary"
						body="Make muffins give attitude chase mice sweet beast under the bed all of a sudden go crazy behind the couch destroy couch intently stare at the same spot chew ipad power cord bag stretch claw drapes, leave dead animals as gifts attack feet flop over hopped up on goofballs hunt anything that moves hide when guests come over intrigued by the shower stand in front of the computer screen rub face on everything."
					/>
				</div>

				<div>
					<a
						href="https://pagespeed.web.dev/report?url={hrefLocation}"
						target="_blank"
						class="btn btn-light w-100"
						rel="noreferrer"
					>
						Google PageSpeed Report
					</a>
				</div>
			</div>

			<p>
				Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
			</p>
		</div>
	</div>
</main>
