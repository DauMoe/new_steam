<script lang="ts">
  import "$lib/styles/_banner.scss";
	import { goto } from "$app/navigation";
	import Clickable from "./Clickable.svelte";

  export let primary_url: string | undefined;
  export let url: string | undefined;

  function gotoUrl() {
    if (url) goto(url);
  }
</script>

{#if primary_url}
  <Clickable className="banner" onClick={gotoUrl}>
    <img src={primary_url} alt="banner" />
  </Clickable>
{/if}