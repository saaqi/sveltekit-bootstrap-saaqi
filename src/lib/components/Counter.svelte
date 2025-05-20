<script>
	// Create a variable to hold the count value, initialized to 0
	let count = $state(0);
	const times = $derived(count == 1 ? 'time' : 'times');

	const { 
		btnStyle = 'primary',
		className = ''
 } = $props();
</script>

<!-- onclick event handler is set to the increment function -->
<!-- Button text displays the current count and the word "time" with appropriate pluralization -->
<button type="button" class="btn btn-{btnStyle} w-100 {className}" onclick={() => count++}>
	Pressed {count}
	{times}
</button>
