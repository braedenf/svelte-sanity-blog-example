<script context="module">
	export async function load({ fetch }) {
		const postData = await fetch('posts.json').then((res) => res.json());

		return {
			props: {
				postData
			}
		};
	}
</script>

<script>
	export let postData;
	export let posts = postData.parsedPosts.result;
</script>

<div class="flex justify-center mb-12 mt-12">
	<h1 class="font-bold font-regular text-5xl lg:text-6xl text-gray-800 mb-6 mt-8">Recent Posts</h1>
</div>
<div class="flex justify-center px-4">
	<ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 text-lg font-semibold sm:w-4/5">
		{#each posts as post}
			<div class="card bordered">
				<figure>
					<a href={`/post/${post.slug.current}`}>
						<img src={post.mainImage.imageUrl.url} alt={post.altImageText} class="w-full" />
					</a>
				</figure>
				<div class="card-body bg-neutral-content">
					<a href={`/post/${post.slug.current}`} class="card-title hover:underline font-regular"
						>{post.title}</a
					>
					<p class="font-regular font-light">
						Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus
						veritatis sed molestiae voluptates incidunt iure sapiente.
					</p>
					<div class="card-actions font-regular">
						<div class="badge badge-ghost">Article</div>
						<div class="badge badge-ghost">Photography</div>
					</div>
				</div>
			</div>
		{/each}
	</ul>
</div>
