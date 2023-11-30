<script context="module" lang="ts">
  export type RectangleIconType = "notification" | "people" ;
</script>

<script lang="ts">
  import NotificationIcon from "assets/icons/Notifications.svg";
  import PeopleIcon from "assets/icons/People.svg";
  import classNames from "classnames";
  import type { MouseEventHandler } from "svelte/elements";

  export let count: number = 0;
  export let type: RectangleIconType = "notification";
  export let customClass: string[] = [];
  export let onPress: MouseEventHandler<EventTarget>;

  const getIcon = (type: RectangleIconType) => {
    switch (type) {
      case "notification": return NotificationIcon;
      case "people": return PeopleIcon;
    }
  }
</script>

<div class={classNames('rectangle', ...customClass)} on:click={onPress}>
  <img src={getIcon(type)} alt="System icon" />
  {#if count > 0}
    <div class="rectangle__circle">
      <span>{count}</span>
    </div>
  {/if}
</div>