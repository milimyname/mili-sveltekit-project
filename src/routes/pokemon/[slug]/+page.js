/** @type {import('../../$types').PageLoad} */
export async function load({ params }) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
	const pokemon = await res.json();
	return {
		props: { pokemon }
	};
}
