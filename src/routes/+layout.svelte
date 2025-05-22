<script>
	import '$lib/styles/bootstrap.css';
	import '$lib/styles/style.scss';

	const { children } = $props();
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Loading Animation
	/** Hide Preloader */
	import { onMount } from 'svelte';
	let hidePreloader = $state();
	let nonePreloader = $state();
	onMount(() => {
		hidePreloader = 'hide-preloader';
		setTimeout(() => {
			nonePreloader = 'none-preloader';
		}, 301);
	});
</script>

<div class="atf-preloader {hidePreloader} {nonePreloader}" id="atf-preloader">
	<div class="atf-status">
		<div class="atf-lds-roller">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</div>

<Navigation />

<div class="svh-100">
	{@render children()}
</div>
<Footer />

<style>
	#atf-preloader {
		transition: all ease-in-out 1s;
	}
	.hide-preloader {
		opacity: 0 !important;
		visibility: hidden !important;
		transition: all ease-out 0.3s;
	}
	.none-preloader {
		display: none !important;
	}
	.atf-preloader {
		background: rgba(0, 0, 0, 0.97);
		bottom: 0;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 99999999;
	}
	.atf-lds-roller {
		display: inline-block;
		position: absolute;
		width: 96px;
		height: 96px;
		top: 50%;
		left: 50%;
		margin: -40px 0 0 -40px;
		filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
	}
	.atf-lds-roller div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #fff;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.atf-lds-roller div:nth-child(1) {
		left: 8px;
		animation: atf-lds-roller1 0.6s infinite;
	}
	.atf-lds-roller div:nth-child(2) {
		left: 8px;
		animation: atf-lds-roller2 0.6s infinite;
	}
	.atf-lds-roller div:nth-child(3) {
		left: 32px;
		animation: atf-lds-roller2 0.6s infinite;
	}
	.atf-lds-roller div:nth-child(4) {
		left: 56px;
		animation: atf-lds-roller3 0.6s infinite;
	}
	@keyframes atf-lds-roller1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes atf-lds-roller3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes atf-lds-roller2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
</style>
