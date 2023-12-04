<script lang="ts">
  import SteamLongLogo from 'assets/icons/SteamLongLogo.svg';
  import ArrowLeft from 'assets/icons/ArrowLeft.svg';
  import ArrowRight from 'assets/icons/ArrowRight.svg';
  import RectangleIcon from 'components/RectangleIcon.svelte';
  
  import classNames from 'classnames';
  import Avatar from 'components/Avatar.svelte';
  import { GenSubClass } from 'components/Utility';

  export let listNavigation: any[] = [];
  export let defaultIndex: number = 0;
  export let onSelected: Function;

  let selectedItem: any;

  const { getRootClass, genSubClass } = new GenSubClass("primary-header");
  const onSelectedItem = (item: any, index: number) => {
    selectedItem = item;
    onSelected(item, index);
  }

  $: defaultIndex, selectedItem = listNavigation[defaultIndex];
</script>

<div class={getRootClass()}>
  <div class={genSubClass("__navigation")}>
    <img src={ArrowLeft} alt="Arrow Left" width="100%" height="100%"/>
    <img src={ArrowRight} alt="Arrow Right" width="100%" height="100%"/>
  </div>
  <div class={genSubClass("__logo")}>
    <a href="/">
      <img src={SteamLongLogo} height="100%" alt="Steam Logo"/>
    </a>
  </div>
  <div class={genSubClass("__list")}>
    {#each listNavigation as navigation, index}
      {#key index}
        <p class={classNames("mr-66", { "selected": selectedItem?.displayText === navigation?.displayText })} on:click={() => onSelectedItem(navigation, index)}>{navigation.displayText}</p>
      {/key}
    {/each}
  </div>
  <RectangleIcon 
    type="people"
    customClass={["mr-10"]}
    onPress={() => {console.log("People")}}
  />
  <RectangleIcon 
    type="notification"
    customClass={["mr-10"]}
    count={10} 
    onPress={() => {}}
  />
  <Avatar  />

  <div class={genSubClass("__utility")}>
    <p class="mr-18">Help</p>
    <p class="mr-18">View</p>
    <RectangleIcon
      type="dash"
      size={20}
      noBackground
      customClass={["mr-18"]}
      onPress={() => {}}
    />
    <RectangleIcon
      type="fullscreen"
      size={20}
      noBackground
      customClass={["mr-18"]}
      onPress={() => {}}
    />
    <RectangleIcon
      type="close"
      size={20}
      noBackground
      onPress={() => {}}
    />
  </div>
</div>