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
	<div class="container mt-4">
		<div class="row g-3">
			{#each data.menu as { name, price, description, image, category }, index ('resmenu-' + index)}
				<div class="col-12 col-md-6 col-lg-4">
					<div class="card h-100">
						<img
							src="https://raw.githubusercontent.com/saaqi/restaurant-mobile-app-react-native/refs/heads/main/assets/menu/{image}"
							class="card-img-top"
							alt={name}
						/>
						<div class="card-body">
							<h4 class="card-title mb-3">{name}</h4>
							<div class="row align-items-center">
								<div class="col-6">
									<h5 class="card-subtitle text-capitalize mb-4">{category}</h5>
								</div>
								<div class="col-6">
									<h5
										class="card-subtitle text-capitalize mb-4 text-center py-2 px-1 rounded bg-body-tertiary"
									>
										${price}
									</h5>
								</div>
							</div>
							<p class="card-text mt-auto">{description}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/snippet}

{#await restaurantMenu()}
	<p>Loading External Menu ...</p>
{:then menu}
	{@render resMenu(menu)}
{:catch error}
	{alert(error + ' - Error Fetching Restaurant Menu')}
{/await}
