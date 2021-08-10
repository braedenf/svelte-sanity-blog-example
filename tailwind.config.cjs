const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		fontFamily: {
			headline: 'Abril Fatface, cursive, sans-serif',
			regular: 'Poppins, normal, sans-serif',
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
};

module.exports = config;
