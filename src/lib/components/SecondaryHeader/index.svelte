<script lang="ts">
	import '$lib/styles/_secondaryHeader.scss';
	import { get } from 'svelte/store';
	import LibraryHeader from './LibraryHeader.svelte';
	import StoreHeader from './StoreHeader.svelte';
	import { clientStore } from '$lib/store/user';
	
  $: ({ header: { client } } = get(clientStore));
	$: selectedItem = client.find(item => item.selected) || client[0];
	$: console.log("sel", selectedItem);
</script>

<div class="secondaryHeader">
	{#if selectedItem}
		{#if selectedItem.id === 1}
			<StoreHeader items={selectedItem.items}/>
		{:else if selectedItem.id === 2}
			<LibraryHeader />
		{/if}
	{/if}
</div>
