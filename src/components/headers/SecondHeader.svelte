<script lang="ts">
  import HoverableItem from "components/HoverableItem.svelte";
  import SearchBar from "./SearchBar.svelte";
  import RectangleIcon from "components/RectangleIcon.svelte";
  import { GenSubClass } from "components/Utility";

  export let listNavigation: any[] = [];

  const { genSubClass, getRootClass } = new GenSubClass("second-header");
</script>

<div class={getRootClass()}>
  <div class={genSubClass('__list')}>
    {#each listNavigation as navigation, index}
      {#key index}
        <p>{navigation.displayText}</p>
      {/key}
    {/each}
  </div>
  <SearchBar/>
  
  <div class={genSubClass('__utility')}>
    <HoverableItem
      text="Wishlist"
      customClass={["mr-29"]}
    />
    <HoverableItem
      text="Cart"
      customClass={["mr-29"]}
    />

    <RectangleIcon
      type="setting"
      size={20}
      customClass={["setting-bg"]}
      onPress={() => {}}
    />
  </div>
</div>