<script lang="ts">
  import "$lib/styles/_storeHeader.scss";
  import { goto } from "$app/navigation";
	import Clickable from "../Clickable.svelte";
	import Icon from "../Icon/Icon.svelte";
	import { SettingLogo } from "../Icon/IconName";
	import SearchBox from "../SearchBox.svelte";

  export let items;
</script>

<div class="storeHeaderWrapper">
  <div>
    {#if Array.isArray(items)}
      {#each items as item, index}
        <Clickable className={`storeHeaderItem ${index == 0 ? "focus" : ""}`}>
          {item.title}
        </Clickable>
      {/each}
    {/if}
  </div>
  
  <SearchBox onSearch={_ => {}}/>
  
  <div class="storeHeaderRight">
    <Clickable onClick={_ => goto('/wishlist')} className="linkItem">Wishlist</Clickable>
    <Clickable onClick={_ => goto('/cart')} className="linkItem">Cart</Clickable>
    <Icon iconName={SettingLogo} border containerClassName='squareIcon'/>
  </div>
</div>