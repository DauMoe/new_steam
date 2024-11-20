<script lang="ts">
  import * as Icon from "./IconName";
  import ArrowLeftIcon from "$lib/assets/icons/ArrowLeft.png";
  import LogoIcon from "$lib/assets/icons/BigLogo.png";
  import FullsizeLogoIcon from "$lib/assets/icons/FullsizeLogo.svg";
  import DashIcon from "$lib/assets/icons/Dash.png";
  import CopyIcon from "$lib/assets/icons/Copy.png";
  import CloseIcon from "$lib/assets/icons/Close.png";
  import FriendsIcon from "$lib/assets/icons/Friends.png";
  import RingIcon from "$lib/assets/icons/Ring.png";
  import SettingIcon from "$lib/assets/icons/Settings.png";
  import AddIcon from "$lib/assets/icons/Add.png";
  import WindowsIcon from "$lib/assets/icons/Windows.png";
  import HeartIcon from "$lib/assets/icons/Heart.png";
  import SolidHeartIcon from "$lib/assets/icons/SolidHeart.png";
	import Clickable from "../Clickable.svelte";

  export let iconName: string = "";
  export let size: number = 24;
  export let className: string = "";
  export let containerClassName: string = "";
  export let style: string | undefined = undefined;
  export let border = false;
  export let disable: boolean = true;
  export let onClick = (e: MouseEvent) => {};

  function getSrcFromIconName(name: string, size: number) {
    const customStyle = style ?? `width: ${size}px; height: ${size}px`;
    switch(name) {
      case Icon.ArrowLeft:
        return {
          src: ArrowLeftIcon,
          customStyle
        };
      case Icon.ArrowRight:
        return {
          src: ArrowLeftIcon,
          customStyle: `transform: rotate(180deg); ${customStyle}`
        }
      case Icon.Logo:
        return {
          src: LogoIcon,
          customStyle
        }
      case Icon.FullsizeLogo:
        return {
          src: FullsizeLogoIcon,
          customStyle: `height: ${size}px`
        }
      case Icon.CopyLogo:
        return {
          src: CopyIcon,
          customStyle
        }
      case Icon.CloseLogo:
        return {
          src: CloseIcon,
          customStyle
        }
      case Icon.DashLogo:
        return {
          src: DashIcon,
          customStyle
        }
      case Icon.FriendsLogo:
        return {
          src: FriendsIcon,
          customStyle: `${customStyle}; height: 16px`
        }
      case Icon.RingLogo:
        return {
          src: RingIcon,
          customStyle: `width: 20px; height: 22px`
        }
      case Icon.SettingLogo:
        return {
          src: SettingIcon,
          customStyle
        }
      case Icon.AddLogo:
        return {
          src: AddIcon,
          customStyle
        }
      case Icon.WindowsLogo:
        return {
          src: WindowsIcon,
          customStyle
        }
      case Icon.HeartLogo:
        return {
          src: HeartIcon,
          customStyle
        }
      case Icon.SolidHeartLogo:
        return {
          src: SolidHeartIcon,
          customStyle
        }
    }
  }

  $: iconInfo = getSrcFromIconName(iconName, size);
</script>

{#if iconName}
  <Clickable
    {onClick}
    {disable}
    className={`iconWrapper${border ? '--border' : ''} ${containerClassName}`}
  >
    <slot name="leftIcon"/>
    <img 
      src={iconInfo?.src} 
      alt={iconName} 
      class={`resizeImage ${className}`} 
      style={iconInfo?.customStyle}
    />
    <slot name="rightIcon"/>
  </Clickable>
{/if}