<script>
  export let data = []; // Prop to decide whether to render the carousel or not
  export let itemsPerView = 3; // Number of visible items
  export let moveStep = 2; // Number of items to move per scroll

  let items = Array.from({ length: 11 }, (_, i) => i); // Mock data: [0, 1, 2, ..., 10]
  let renderedItems = []; // Items to display
  let currentIndex = 0; // Tracks the starting index

  // Initialize rendered items
  $: if (data.length > 0) {
    renderedItems = getRenderedItems();
  }

  // Function to calculate rendered items
  function getRenderedItems() {
    const totalItems = items.length;
    const visibleRange = itemsPerView + moveStep * 2;
    const result = [];

    for (let i = 0; i < visibleRange; i++) {
      const index = (currentIndex + i) % totalItems; // Circular indexing
      result.push(items[index]);
    }

    return result;
  }

  // Scroll left
  function scrollLeft() {
    currentIndex -= moveStep;
    if (currentIndex < 0) {
      currentIndex += items.length; // Wrap around
    }
    renderedItems = getRenderedItems();
  }

  // Scroll right
  function scrollRight() {
    currentIndex += moveStep;
    currentIndex %= items.length; // Wrap around
    renderedItems = getRenderedItems();
  }
</script>

<style>
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 200px;
  }

  .carousel-track {
    display: flex;
    position: relative;
    transition: transform 0.3s ease;
  }

  .controls {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
</style>

{#if data.length > 0}
  <div class="carousel-container">
    <div class="carousel-track">
      {#each renderedItems as item}
        <div
          class="carousel-item"
          style="flex: 0 0 calc(100% / {itemsPerView}); border: 1px solid black; border-radius: 8px; padding: 10px; background-color: aqua"
        >
          {item}
        </div>
      {/each}
    </div>
  </div>

  <div class="controls">
    <button on:click={scrollLeft}>Scroll Left</button>
    <button on:click={scrollRight}>Scroll Right</button>
  </div>
{:else}
  <p>No data available to display.</p>
{/if}
