<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.svg';
	onMount(async () => {
		// Only runs in browser
		// await import('bootstrap/js/dist/dropdown.js');
		await import('bootstrap/js/dist/collapse.js');
		// await import('bootstrap/js/dist/scrollspy.js');
	});

	// Collapse Bootstrap Navigation on click
	function collapseBootstrapMenu() {
		const menuButton = document.querySelector('.navbar-toggler');
		const navbarCollapse = document.querySelector('.navbar-collapse');
		menuButton.classList.add('collapsed');
		menuButton.setAttribute('aria-expanded', 'false');
		navbarCollapse.classList.remove('show');
	}

	// Navigation links
	// You can add more links here
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Blog', href: '/blog' }
	];
</script>

{#snippet navigationLinks(name, href)}
	{#each navLinks as { name, href }}
		{#if href && name}
			<li class="nav-item text-uppercase fw-medium bg-body px-2 ps-5 ps-sm-2 rounded">
				<a onclick={collapseBootstrapMenu} class="nav-link" href={base + href} aria-current={name}>{name}</a>
			</li>
		{/if}
	{/each}
{/snippet}

<nav class="navbar navbar-expand-sm bg-body-tertiary sticky-top shadow-sm">
	<div class="container px-3 py-2">
		<a onclick={collapseBootstrapMenu} class="navbar-brand me-5" href="{base}/" aria-label="Svelte + Bootstrap by Saaqi">
			<img src={logo} class="img-fluid navLogo" alt="Svelte + Bootstrap by Saaqi" />
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNavDropdown"
			aria-controls="navbarNavDropdown"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav gap-3 pt-lg-0 pt-3">
				{@render navigationLinks(navLinks)}
				<!-- <li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="#home"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Dropdown link
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#home">Action</a></li>
						<li><a class="dropdown-item" href="#home">Another action</a></li>
						<li><a class="dropdown-item" href="#home">Something else here</a></li>
					</ul>
				</li> -->
			</ul>
		</div>
	</div>
</nav>

<style>
	.navLogo {
		width: 60px;
		height: auto;
	}
</style>
