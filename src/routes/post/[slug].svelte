<script context="module">
	export async function load({ fetch, page }) {
		const postData = await fetch('../posts.json').then((res) => res.json());

		const posts = postData.parsedPosts.result;
		const post = posts.filter((item) => item.slug.current == page.params.slug);

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	export let post;
</script>

<h1>{post[0].title}</h1>
