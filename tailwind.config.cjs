/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx,svelte}'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
