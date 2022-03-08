<script>
  export let name;
  export let inputText = "";

  import Map from "https://deno.land/x/svelte_map/Maps.svelte";

  let long = 50;
  let lat = 50;

  function provideInput() {
    alert(`you have entered ${inputText}`);
  }
</script>

<h1>Hello {name}!</h1>

<input type="text" name="" id="" bind:value={inputText} />

<button on:click={provideInput}> Go </button>
<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<Map {long} {lat} button={true} />

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
