<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function menuClicked() {
		dispatch('menuClicked');
	}

	export let menuOpen;
</script>

<header>
	<div class="flex navbar justify-between bg-base-100">
		<label on:click={menuClicked} for="mobile-drawer" class="btn btn-ghost btn-circle">
			{#if !menuOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 text-neutral"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{/if}
		</label>
		<a class="text-4xl font-bold font-headline text-neutral" href="/">unapologetic</a>
		<label for="search" class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
					clip-rule="evenodd"
				/>
			</svg>
		</label>
	</div>
</header>
