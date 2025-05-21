<script>
	let { placeholder = 'Enter your text here...' } = $props();
	let inputText = $state('');
</script>

<div class="mb-3">
	<label for="exampleFormControlTextarea1" class="form-label">Insert Reactive Text Here:</label>
	<textarea
		bind:value={inputText}
		class="form-control"
		id="exampleFormControlTextarea1"
		{placeholder}
		rows="3"
	></textarea>
</div>
<div class="inputTextOutput bg-light text-bg-light rounded-3 border-1 border-black mb-3">
	{inputText}
</div>

<style lang="scss">
	.inputTextOutput {
		font-size: 1.5rem;
		min-height: 3rem;
		padding: 0.5rem 1rem;
	}
</style>
