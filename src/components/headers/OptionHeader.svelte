<script>
  import SteamLongLogo from 'assets/icons/SteamLongLogo.svg';
  import ArrowLeft from 'assets/icons/ArrowLeft.svg';
  import ArrowRight from 'assets/icons/ArrowRight.svg';
  import RectangleIcon from 'components/RectangleIcon.svelte';
  import classNames from 'classnames';

  const ListNavigation = [{
    displayText: "store",
    path: "/",
    onClick: () => {}
  }, {
    displayText: "community",
    path: "/",
    onClick: () => {}
  }, {
    displayText: "{user}",
    path: "/",
    onClick: () => {}
  }, {
    displayText: "library",
    path: "/",
    onClick: () => {}
  }, {
    displayText: "downloads",
    path: "/",
    onClick: () => {}
  }];
</script>

<div class="option-header">
  <div class="option-header__navigation">
    <img src={ArrowLeft} alt="Arrow Left" width="100%" height="100%"/>
    <img src={ArrowRight} alt="Arrow Right" width="100%" height="100%"/>
  </div>
  <div class="option-header__logo">
    <a href="/">
      <img src={SteamLongLogo} height="100%" alt="Steam Logo"/>
    </a>
  </div>
  <div class="option-header__list">
    {#each ListNavigation as navigation, index}
      {#key index}
        <p class="ml-66">{navigation.displayText}</p>
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
    count={10} 
    onPress={() => {}}
  />
</div>