<script lang="ts">
  import "$lib/styles/carousels/_intro.scss";
	import Icon from "../Icon/Icon.svelte";
	import { AddLogo, WindowsLogo } from "../Icon/IconName";
	import Tag from "../Tag.svelte";

  export let onClick: Function = () => {};
  export let data: CarouselItem;
</script>

<div class="introCard__wrapper">
  <div class="introCard__primary">
    <img src={data.primary_image} alt={`${data.title} primary image`}>
  </div>

  <div class="introCard__subContent">
    <h1>{data.title}</h1>
    <p>{data.description}</p>

    {#if data.sub_images}
      <div class="introCard__subContent__grid">
        {#each data.sub_images as subImage, index}
          <img src={subImage} alt={`${data.title} sub image no.${index}`}/>
        {/each}
      </div>
    {/if}

    <div class="introCard__subContent__tags">
      {#each data.tags as tag}
        <Tag 
          content={tag}
          className={"mr-8"}
        />
      {/each}
      <Icon 
        border 
        iconName={AddLogo} 
        containerClassName='squareIcon'
      />
      <Icon
        disable
        iconName={WindowsLogo}
        containerClassName='ml-auto'
      />
    </div>

  </div>
</div>