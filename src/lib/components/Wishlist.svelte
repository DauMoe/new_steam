<script lang="ts">
  import "$lib/styles/_wishlist.scss";
	import Icon from "./Icon/Icon.svelte";
	import { HeartLogo, SolidHeartLogo } from "./Icon/IconName";

  export let fullWidth: boolean = false;
  export let favorite: boolean = false;

  function revertFavoriteState() {
    favorite = !favorite;
  }
</script>

{#if fullWidth}
    <Icon 
      iconName={favorite ? SolidHeartLogo : HeartLogo}
      border
      containerClassName={`wishlist__wrapper${favorite ? ' favorite' : ''}`}
      className={"wishlist__icon"}
      onClick={revertFavoriteState}
    >
      <span slot="leftIcon">Wishlist</span>
    </Icon>
{:else}
  <Icon
    iconName={favorite ? SolidHeartLogo : HeartLogo}
    border
  />
{/if}