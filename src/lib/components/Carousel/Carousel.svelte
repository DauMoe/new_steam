<script lang="ts">
  import "$lib/styles/carousels/_general.scss";

	import CarouselController from "./CarouselController.svelte";
	import IntroCard from "./IntroCard.svelte";

  export let title: string | undefined;
  export let type: string | undefined;
</script>

<CarouselController {title}>
  <IntroCard onClick={() => {console.log("CLICK TO CARD")}}/>
</CarouselController>