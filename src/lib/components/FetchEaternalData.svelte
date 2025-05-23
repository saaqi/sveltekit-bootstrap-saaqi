<script>
	const {
		externalJson = `https://raw.githubusercontent.com/saaqi/restaurant-mobile-app-react-native/refs/heads/main/src/menu.json`
	} = $props();

	// Import Externam JSON File
	const restaurantMenu = async () => {
		const response = await fetch(externalJson);
		return response.json();
	};

	// Import Transition
	import { fade } from 'svelte/transition';
</script>

{#snippet resMenu(data)}
	<div class="container mt-4" in:fade>
		<div class="row g-3">
			{#each data.menu as { name, price, description, image, category }, index ('resmenu-' + index)}
				<div class="col-6 col-md-4 col-lg-3">
					<div class="card h-100">
						<img
							src="https://raw.githubusercontent.com/saaqi/restaurant-mobile-app-react-native/refs/heads/main/assets/menu/{image}"
							class="card-img-top"
							alt={name}
							loading='lazy'
						/>
						<div class="card-body">
							<h4 class="card-title mb-3">{name}</h4>
							<p class="card-text">{description}</p>
						</div>
						<div class="card-footer">
							<div class="row align-items-center justify-content-between">
								<div class="col-6">
									<h5 class="card-subtitle text-capitalize">{category}</h5>
								</div>
								<div class="col-6">
									<h5
										class="card-subtitle text-capitalize text-center py-2 px-1 rounded bg-body-tertiary"
									>
										${price}
									</h5>
								</div>
							</div>
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
