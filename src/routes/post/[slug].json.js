export async function get({ params }) {
	const { slug } = params;

	// const query = encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"]`);
	const query = encodeURIComponent(`
		*[ _type == "post" && slug.current == "${slug}"]
		{
			title,
			mainImage{"imageUrl": asset -> {url}},
			altImageText,
			body
		}
	`);
	const url = import.meta.env.VITE_SANITYCMS_URL + query;

	const parsedPost = await fetch(url).then((res) => res.json());

	const post = parsedPost.result[0];

	if (!post) {
		return {
			status: 404,
			error: 'Post not found'
		};
	} else {
		return {
			status: 200,
			body: {
				post
			}
		};
	}
}
