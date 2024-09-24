<script lang="ts">
	import { ArrowLeft, ArrowRight, Logo, FullsizeLogo } from "./IconName";
  import ArrowLeftIcon from "$lib/assets/icons/ArrowLeft.png";
  import LogoIcon from "$lib/assets/icons/BigLogo.png";
  import FullsizeLogoIcon from "$lib/assets/icons/FullsizeLogo.svg";

  export let iconName: string = "";
  export let size: number = 24;
  export let className: string = "";

  function getSrcFromIconName(name: string, size: number) {
    const customStyle = `width: ${size}px; height: ${size}px;`;
    switch(name) {
      case ArrowLeft:
        return {
          src: ArrowLeftIcon,
          customStyle
        };
      case ArrowRight:
        return {
          src: ArrowLeftIcon,
          customStyle: `${customStyle} transform: rotate(180deg)`
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
    }
  }

  $: iconInfo = getSrcFromIconName(iconName, size);
</script>

{#if iconName}
  <img 
    src={iconInfo?.src} 
    alt={iconName} 
    class={`resizeImage ${className}`} 
    style={iconInfo?.customStyle}
  />
{/if}