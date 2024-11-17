<script lang="ts">
  import "$lib/styles/_tag.scss";
	import Clickable from "./Clickable.svelte";

  export let content: string;
  export let className: string = '';
</script>

{#if content}
  <Clickable disable className={`tag__wrapper ${className}`}>
    <span>{content}</span>
  </Clickable>
{/if}