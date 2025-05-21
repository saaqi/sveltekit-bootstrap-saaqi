<script>
	import Counter from '$lib/components/Counter.svelte';
	import Logos from '$lib/components/Logos.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import { onMount } from 'svelte';

	let hrefLocation = $state('');
	onMount(() => {
		hrefLocation = window.location.href;
	});

	let textBoxToggle = $state(false);
</script>

<svelte:head>
	<title>Svelte + Bootstrap by Saaqi</title>
	<meta
		name="description"
		content="This template should help get you started developing with Sveltekit with bootstrap."
	/>
</svelte:head>

<div id="home" class="container py-3 py-md-5">
	<div class="d-flex flex-column gap-3">
		<div class="d-flex gap-5 my-3">
			<Logos />
		</div>

		<h1>Welcome to SvelteKit + Bootstrap by Saaqi</h1>

		<div class="col-12 col-md-6">
			<div class="row g-2">
				<div class="col-6">
					<Counter btnStyle="secondary" />
				</div>
				<div class="col-6">
					<Modal
						id="modal-demo"
						btnTitle="Modal Demo"
						modalTitle="Cat's Diary"
						body="Make muffins give attitude chase mice sweet beast under the bed all of a sudden go crazy behind the couch destroy couch intently stare at the same spot chew ipad power cord bag stretch claw drapes, leave dead animals as gifts attack feet flop over hopped up on goofballs hunt anything that moves hide when guests come over intrigued by the shower stand in front of the computer screen rub face on everything."
					/>
				</div>

				<div class="col-6">
					<button
						class="btn btn-{!textBoxToggle ? `success` : `danger`} w-100"
						onclick={() => (textBoxToggle = !textBoxToggle)}
					>
						{!textBoxToggle ? 'Show' : 'Hide'} Text Input
					</button>
				</div>

				<div class="col-12 mt-3">
					{#if textBoxToggle}
						<TextInput />
					{/if}
				</div>
			</div>
		</div>

		<p>
			Visit <a href="https://svelte.dev/docs/kit" target="_blank" rel="nofollow"
				>svelte.dev/docs/kit</a
			>
			to read the documentation. <br />
		</p>
		<p>
			Check
			<a
				href="https://pagespeed.web.dev/report?url={hrefLocation}"
				target="_blank"
				rel="noreferrer"
			>
				Google PageSpeed Report.
			</a>
		</p>
	</div>
</div>
