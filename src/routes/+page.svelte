<script lang="ts">
  import "$lib/styles/root.scss";
  import { Client, SecondaryHeader, Banner } from "$lib/components";
	import { onMount } from "svelte";
	import { getHomeData } from "$lib/APIs/home";
	import { homeStore } from "$lib/store/home";

  onMount(() => {
    getHomeData();
  });

  $: ({ items } = $homeStore);
  $: console.log(items);  
</script>

<div class="storeWrapper">
  <!-- Header Region -->
  <Client/>
  <SecondaryHeader/>

  <!-- Carousel Region -->
  {#each items as item}
    {#if item.type === "banner"}
      <Banner 
        url={item.url}
        primary_url={item.image_url} 
      />
    {:else}
      <!-- <Carousel type={item.type} /> -->
    {/if}
  {/each}
</div>