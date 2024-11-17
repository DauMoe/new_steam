<script lang="ts">
  import "$lib/styles/carousels/_general.scss";

	import CarouselController from "./CarouselController.svelte";
	import IntroCard from "./IntroCard.svelte";

  export let title: string | undefined;
  export let type: string | undefined;
  export let data: Array<CarouselItem> | [];
</script>

{#if data.length > 0}
  <CarouselController {title}>
    {#each data as item}
      <IntroCard
        data={item}
      />
    {/each}
  </CarouselController>
{/if}