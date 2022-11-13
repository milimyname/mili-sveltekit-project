<script>
import { pokemon } from '../stores/Pokestore';
import PokemonCard from '../components/PokemonCard.svelte';

let searchTerm = '';
let filteredPokemons = [];

$:{
    if(searchTerm) filteredPokemons = $pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()));
    else filteredPokemons = [...$pokemon];
}

</script>

<svelte:head>
    <title> Mili Svelte Project </title>
</svelte:head>

<h1 class="text-4xl font-bold text-center mb-8">Svelte Kit Pokedex</h1>

<input type="text" class="w-full rounded-md text-lg p-4 border-4" placeholder="Search for Pokemon" bind:value={searchTerm}>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-rows-1">
    {#each filteredPokemons as poke}
        <PokemonCard {poke} />
    {/each}
</div>
