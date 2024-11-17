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
  $: console.log("items", items);
  
</script>

<div class="home__wrapper">

  <!-- Header Region -->
  <Client/>
  <SecondaryHeader/>

  <!-- Carousel Region -->
  <div class="home__content">
    {#each items as item}
      {#if item.type === "banner"}
        <Banner 
          url={item.url}
          primary_url={item.image_url} 
        />
      {:else}
        <div class="home__content--carousel">
          <Carousel 
            title={item.title}
            type={item.type}
            data={item.data}
          />
        </div>
      {/if}
    {/each}
  </div>
  
</div>