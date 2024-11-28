<script lang="ts">
  import "$lib/styles/carousels/_general.scss";

	import CarouselController from "./CarouselController.svelte";
	import IntroCard from "./IntroCard.svelte";

  export let title: string | undefined;
  export let type: string | undefined;
  export let data: CarouselItem[];

  function getCardType(type: string | undefined) {
    switch(type) {
      case "intro_carousel":
        return IntroCard;
      default:
        return IntroCard;
    }
  }

  $: cardType = getCardType(type);
</script>

<CarouselController 
  {data}
  {cardType}
/>