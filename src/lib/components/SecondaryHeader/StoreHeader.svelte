<script lang="ts">
  import "$lib/styles/_storeHeader.scss";
	import Clickable from "../Clickable.svelte";
	import SearchBox from "../SearchBox.svelte";
  export let items;
</script>

<div class="storeHeaderWrapper">
  {#if Array.isArray(items)}
    {#each items as item, index}
      <Clickable className={`storeHeaderItem ${index == 0 ? "focus" : ""}`}>
        {item.title}
      </Clickable>
    {/each}
  {/if}
  <SearchBox/>
</div>