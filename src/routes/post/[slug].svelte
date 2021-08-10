<script context="module">
	export async function load({ fetch, page }) {
		const postData = await fetch(`${page.params.slug}.json`).then((res) => res.json());

		return {
			props: {
				postData
			}
		};
	}
</script>

<script>
	import * as blocksToHtml from '@sanity/block-content-to-html';

	export let postData;
	let post = postData.post;

	const h = blocksToHtml;

	const serializers = {
		types: {
			code: (props) => h('pre', { className: props.node.language }, h('code', props.node.code))
		}
	};

	const postBody = blocksToHtml({
		blocks: post.body,
		serializers: serializers
	});
</script>

<a href="/" class="btn btn-sm mx-4 my-6 font-regular hover:bg-primary hover:border-primary-focus">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		class="inline-block w-6 h-6 stroke-current transform rotate-180"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
	</svg>
	Back
</a>

<div class="flex flex-col space-y-6 items-center w-full">
	<h1 class="px-10 mb-8 text-4xl font-regular font-black text-center">{post.title}</h1>
	<img class="w-full h-64 object-cover" src={post.mainImage.imageUrl.url} alt={post.altImageText} />

	<article class="prose lg:prose-xl font-regular">
		{@html postBody}
	</article>
</div>
