<script lang="ts">
	import { ArrowLeft, ArrowRight, Logo, FullsizeLogo, DashLogo, CloseLogo, CopyLogo, FriendsLogo, RingLogo } from "./IconName";
  import ArrowLeftIcon from "$lib/assets/icons/ArrowLeft.png";
  import LogoIcon from "$lib/assets/icons/BigLogo.png";
  import FullsizeLogoIcon from "$lib/assets/icons/FullsizeLogo.svg";
  import DashIcon from "$lib/assets/icons/Dash.png";
  import CopyIcon from "$lib/assets/icons/Copy.png";
  import CloseIcon from "$lib/assets/icons/Close.png";
  import FriendsIcon from "$lib/assets/icons/Friends.png";
  import RingIcon from "$lib/assets/icons/Ring.png";

  export let iconName: string = "";
  export let size: number = 24;
  export let className: string = "";
  export let style = "";
  export let border = false;

  function getSrcFromIconName(name: string, size: number) {
    const customStyle = style ?? `width: ${size}px; height: ${size}px`;
    switch(name) {
      case ArrowLeft:
        return {
          src: ArrowLeftIcon,
          customStyle
        };
      case ArrowRight:
        return {
          src: ArrowLeftIcon,
          customStyle: `transform: rotate(180deg); ${customStyle}`
        }
      case Logo:
        return {
          src: LogoIcon,
          customStyle
        }
      case FullsizeLogo:
        return {
          src: FullsizeLogoIcon,
          customStyle: `height: ${size}px`
        }
      case CopyLogo:
        return {
          src: CopyIcon,
          customStyle
        }
      case CloseLogo:
        return {
          src: CloseIcon,
          customStyle
        }
      case DashLogo:
        return {
          src: DashIcon,
          customStyle
        }
      case FriendsLogo:
        return {
          src: FriendsIcon,
          customStyle
        }
      case RingLogo:
        return {
          src: RingIcon,
          customStyle
        }
    }
  }

  $: iconInfo = getSrcFromIconName(iconName, size);
</script>

{#if iconName}
  {#if border}
    <div class={`iconWrapper  ${className}`}>
      <img 
        src={iconInfo?.src} 
        alt={iconName} 
        class={`resizeImage`} 
        style={iconInfo?.customStyle}
      />
    </div>
  {:else}
    <img 
      src={iconInfo?.src} 
      alt={iconName} 
      class={`resizeImage ${className}`} 
      style={iconInfo?.customStyle}
    />
  {/if}
{/if}