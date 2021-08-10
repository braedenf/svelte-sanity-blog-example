<script>
	import { slideDraw } from './actions/SlideDraw';

	export let menuOpen;
</script>

<div use:slideDraw={{ menuOpen, duration: 200 }} class="drawer-side absolute">
	<label for="main-menu" class="drawer-overlay" />
	<aside class="bg-base-200 w-80 drop-shadow-lg z-50 sticky min-h-screen">
		<ul
			on:click={() => (menuOpen = !menuOpen)}
			class="menu text-neutral text-lg font-semibold font-regular"
		>
			<li><a href="/">Home</a></li>
			<li><a href="/">Blog Posts</a></li>
			<li><a href="/">About</a></li>
			<li><a href="/">Contact</a></li>
		</ul>
	</aside>
</div>
