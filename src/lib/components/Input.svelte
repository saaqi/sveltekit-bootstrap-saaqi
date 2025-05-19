<script>
	let {
		title = '',
		placeholder = 'Enter your text here...',
	} = $props();
</script>

<div class="mb-3">
	<label for="exampleFormControlTextarea1" class="form-label">{title}</label>
	<textarea
		bind:value={title}
		class="form-control"
		id="exampleFormControlTextarea1"
		{placeholder}
		rows="3"
	></textarea>
</div>
