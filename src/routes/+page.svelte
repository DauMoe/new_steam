<script lang="ts">
  import "$lib/styles/root.scss";
  import { Client, SecondaryHeader, Banner } from "$lib/components";
	import { onMount } from "svelte";
	import { getHomeData } from "$lib/APIs/home";
	import { homeStore } from "$lib/store/home";
	import { Carousel } from "$lib/components/Carousel";

  onMount(() => {
    getHomeData();
  });

  $: ({ items } = $homeStore);
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
      <Carousel 
        title={item.title}
        type={item.type} 
      />
    {/if}
  {/each}
</div>