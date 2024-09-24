<script>
  import "$lib/styles/_client.scss";
	import { ArrowLeft, ArrowRight, FullsizeLogo } from "$lib/components/Icon/IconName";
	import ClientItem from "./ClientItem.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import { get } from "svelte/store";
	import { clientStore } from "$lib/utils/store";

  $: ({ header: { primary } } = get(clientStore));
</script>

<div class="clientWrapper">
  <div class="navigator">
    <Icon iconName={ArrowLeft} />
    <Icon iconName={ArrowRight} />
  </div>
  <a href="/">
    <Icon iconName={FullsizeLogo} className="logo"/>
  </a>

  <div class="primaryHeaderLeft">
    {#if Array.isArray(primary)}
      {#each primary as primaryItem, index}
        <ClientItem name={primaryItem.title} selected={primaryItem.selected} />
      {/each}
    {/if}
  </div>
</div>
