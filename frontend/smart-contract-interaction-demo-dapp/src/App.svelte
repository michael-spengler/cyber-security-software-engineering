<script>
  import Home from "@/components/Home.svelte";
  import { fade } from "svelte/transition";
</script>

<div class="ourBackground">
  <main transition:fade>
    <Home />
  </main>
</div>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .ourBackground {
    background-color: black;
    background-size: cover;
  }
</style>
