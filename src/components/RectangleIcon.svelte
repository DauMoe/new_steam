<script context="module" lang="ts">
  export type RectangleIconType = "notification" | "people" | "setting" | "close" | "dash" | "fullscreen";
</script>

<script lang="ts">
  import NotificationIcon from "assets/icons/Notifications.svg";
  import PeopleIcon from "assets/icons/People.svg";
  import SettingIcon from "assets/icons/Settings.svg";
  import DashIcon from 'assets/icons/Dash.svg';
  import FullScreenIcon from 'assets/icons/FullScreen.svg';
  import CloseIcon from 'assets/icons/Close.svg';

  import classNames from "classnames";
  import type { MouseEventHandler } from "svelte/elements";

  export let count: number = 0;
  export let type: RectangleIconType = "notification";
  export let customClass: classNames.ArgumentArray = [];
  export let size: number = 25; //px
  export let noBackground: boolean = false;
  export let onPress: MouseEventHandler<EventTarget>;

  const getIcon = (type: RectangleIconType) => {
    switch (type) {
      case "notification": return NotificationIcon;
      case "people": return PeopleIcon;
      case "setting": return SettingIcon;
      case "dash": return DashIcon;
      case "close": return CloseIcon;
      case "fullscreen": return FullScreenIcon;
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={classNames('rectangle', { "with-background": !noBackground }, ...customClass)} on:click={onPress}>
  <img src={getIcon(type)} alt="icon" width={`${size}px`} height={`${size}px`}/>
  {#if count > 0}
    <div class="rectangle__circle">
      <span>{count}</span>
    </div>
  {/if}
</div>