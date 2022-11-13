<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.props.pokemon)
  </script>
  
  <h1>{data.props.pokemon.name}</h1>
  <!-- <div>{@html data.content}</div> -->