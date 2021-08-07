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

<div class="p-3">
	<h1 class="font-bold text-4xl text-gray-800 mb-4">Blog Posts</h1>
	<ul class="flex flex-col space-y-4 text-lg font-semibold">
		{#each posts as post, i}
			<li class="hover:underline">
				<a href={`/post/${post.slug.current}`}>{i + 1}. {post.title}</a>
			</li>
		{/each}
	</ul>
</div>
