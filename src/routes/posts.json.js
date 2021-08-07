export async function get() {
	const query = `*[_type=="post"]{title,slug{current},author->{name}}`;
	const url = import.meta.env.VITE_SANITYCMS_URL + query;

	const parsedPosts = await fetch(url).then((res) => res.json());

	return {
		status: 200,
		body: {
			parsedPosts
		}
	};
}
