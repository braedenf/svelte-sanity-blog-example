<script>
	import '../app.postcss';
	import { clickOutside } from '$lib/actions/ClickOutside';
	import Nav from '$lib/Nav.svelte';
	import Drawer from '$lib/Drawer.svelte';

	let menuOpen = false;
</script>

<div
	use:clickOutside
	on:click_outside={() => (menuOpen ? (menuOpen = !menuOpen) : (menuOpen = false))}
	class="sticky top-0 z-10"
>
	<Nav on:menuClicked={() => (menuOpen = !menuOpen)} {menuOpen} />

	<Drawer bind:menuOpen />
</div>

<slot />
