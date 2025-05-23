<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.svg';

	import { onNavigate } from '$app/navigation';
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		// Prevent animation if navigating to the same URL
		if (navigation.from?.url.pathname === navigation.to?.url.pathname) {
			return;
		}
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

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
				<a onclick={collapseBootstrapMenu} class="nav-link" href={base + href} aria-current={name}
					>{name}</a
				>
			</li>
		{/if}
	{/each}
{/snippet}

<header>
	<nav
		class="navbar navbar-expand-sm shadow-sm fixed-top"
		style="background-color: rgba(var(--bs-tertiary-bg-rgb), 0.95)"
	>
		<div class="container px-3 py-2">
			<a
				onclick={collapseBootstrapMenu}
				class="navbar-brand me-5"
				href="{base}/"
				aria-label="Svelte + Bootstrap by Saaqi"
			>
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
				<ul class="navbar-nav gap-3">
					{@render navigationLinks(navLinks)}
				</ul>
			</div>
		</div>
	</nav>
	<div class="navSpacer"></div>
</header>

<style>
	.navLogo {
		width: 60px;
		height: auto;
	}
	.navSpacer {
		min-height: 80px;
	}

	/* Slide Trasnitions to the Navigation
	------------------------------------ */
	::view-transition-old(root),
	::view-transition-new(root) {
		animation-duration: 0.2s;
		animation-timing-function: ease-in;
	}

	/* ::view-transition-old(root) {
		animation-name: slide-out-left;
	} */

	::view-transition-new(root) {
		animation-name: slide-in-right;
	}

	/* Slide Out to Left */
	/* @keyframes slide-out-left {
		from {
			transform: translateY(0%);
			opacity: 1;
		}
		to {
			transform: translateY(-10%);
			opacity: 0;
		}
	} */

	/* Slide In from Right */
	@keyframes slide-in-right {
		from {
			transform: translateY(10%);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}
</style>
