// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemonData = async (num) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
	const res = await fetch(url);
	const data = await res.json();

	const loadedPokemon = data.results.map((data, i) => {
		return {
			name: data.name,
			id: i + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
		};
	});

	pokemon.set(loadedPokemon);
};
fetchPokemonData(150);

// setTimeout(() => {
// 	fetchPokemonData(2);
// }, 3000);
