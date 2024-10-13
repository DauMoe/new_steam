<script lang="ts">
	import '$lib/styles/_primaryHeader.scss';
	import LibraryHeader from './LibraryHeader.svelte';
	import StoreHeader from './StoreHeader.svelte';
	export let selectedItem: { id: number, title: string, items: Array<any> };
</script>

<div class="primaryHeader">
	{#if selectedItem}
		{#if selectedItem.id === 1}
			<StoreHeader items={selectedItem.items}/>
		{:else if selectedItem.id === 2}
			<LibraryHeader />
		{/if}
	{/if}
</div>
