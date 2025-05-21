<script>
  const {
    externalJson = `https://raw.githubusercontent.com/saaqi/restaurant-mobile-app-react-native/refs/heads/main/src/menu.json`
  } = $props();

	// Import Externam JSON File
	const restaurantMenu = async () => {
		const response = await fetch(externalJson);
		return response.json();
	};
</script>

{#snippet resMenu(data)}
  {#each data.menu as { name, price, description, image, category }, index ('resmenu-' + index)}
   <div>
      {name} - {price} - {description} - {category}
   </div>
  {/each}
{/snippet}

{#await restaurantMenu()}
	<p>Getting Restaurent Menu ...</p>
{:then menu}
	{@render resMenu(menu)}
{:catch error}
	{alert(error + ' - Error Fetching Restaurant Menu')}
{/await}
