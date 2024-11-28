<script lang="ts">
  import "$lib/styles/carousels/_carouselController.scss";

  export let data: CarouselItem[];
  export let itemsPerView: number = 3;
  export let moveStep: number = 2;
  export let currentIndex: number = 0;
  export let gap: number = 20;

  let refs: { id: string, ref: HTMLDivElement | undefined, data: CarouselItem | undefined }[];
  let moveDirection: number = 0;

  function handleTransitionEnd() {
    if (moveDirection < 0) {
      // Move left: get last <moveStep> items then push to top
      const swapItems = refs.splice(moveDirection);      
      // Update swap data here
      // ....
      refs = [ ...swapItems, ...refs ];
    }
    if (moveDirection > 0) {
      //Move right: get first <moveStep> items then push to last
      const swapItems = refs.splice(0, moveDirection);
      refs = [ ...refs, ...swapItems ];
    }
    moveDirection = 0;
  }

  function move(step: number): void {    
    for (const [index, ref] of refs.entries()) {
      const { ref: refIns } = ref;
      if (refIns) {
        refIns.style.left = `${(100/itemsPerView) * (index - moveStep - step)}%`;
      }
    }
    moveDirection = step;
  }

  $: totalRenderedItem = itemsPerView + 2 * moveStep || Math.min(itemsPerView + 2 * moveStep, data.length);
  $: refs = Array(totalRenderedItem)
              .fill({})
              .map((_, index) => ({ 
                id: `_${index}`, 
                ref: undefined,
                data: undefined
              }));
</script>

{#if data.length > 0}
  <button on:click={_ => move(-moveStep)}>Left</button>
  <button on:click={_ => move(moveStep)}>Right</button>
  <div class="carouselController__container">
    {#each refs as _, index}
      <!-- {#if refs[index].data} -->
        {#key refs[index].id}
          <div 
            bind:this={refs[index].ref}
            on:transitionend={_ => (index == 0) && handleTransitionEnd()}
            class="carouselController__item"
            style="
              --gap: {gap};
              --itemsPerView: {itemsPerView};
              --index: {index};
              --step: {moveStep};
            " 
          >
            Item No.{refs[index].id}
          </div>
        {/key}
      <!-- {/if} -->
    {/each}
  </div>
{/if}