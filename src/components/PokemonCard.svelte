<script>
    /**
	 * @type {{ id: any; image: any; name: any; }}
	 */
     export let poke;
</script>

<a href={`/pokemon/${poke.id}`} class="p-6 transition-all bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
    <img class="h-40 w-40" src={poke.image} alt={poke.name} />
    <h2 class="text-2xl uppercase">{poke.name}</h2>
</a>
