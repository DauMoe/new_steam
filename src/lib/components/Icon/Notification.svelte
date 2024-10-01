<script lang="ts">
	import Icon from "./Icon.svelte";
	import { RingLogo } from "./IconName";

  export let badgeNumber: number = 0;
  export let showBadge: boolean = true;

  function handleBadgeNumber(badgeNumber: number): string | number {
    return badgeNumber > 9 ? "9+" : badgeNumber;
  }
</script>

<div class="notification mr-10">
  <Icon iconName={RingLogo} border/>
  {#if showBadge}
    <span>{handleBadgeNumber(badgeNumber)}</span>
  {/if}
</div>