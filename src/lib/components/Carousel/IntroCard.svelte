<script lang="ts">
  import "$lib/styles/carousels/_intro.scss";
	import Clickable from "../Clickable.svelte";
	import Icon from "../Icon/Icon.svelte";
	import { AddLogo, WindowsLogo } from "../Icon/IconName";
	import Tag from "../Tag.svelte";
	import Wishlist from "../Wishlist.svelte";

  export let onClick: Function = () => {};
  export let item: CarouselItem;  
</script>

{#if item}
  <div class="introCard__wrapper">
    <div class="introCard__primary">
      <img src={item.primary_image} alt={`${item.title} primary image`}>
    </div>

    <div class="introCard__subContent">
      <h1>{item.title}</h1>
      <p>{item.description}</p>

      {#if item.sub_images}
        <div class="introCard__subContent__grid">
          {#each item.sub_images as subImage, index}
            <img src={subImage} alt={`${item.title} sub image no.${index}`}/>
          {/each}
        </div>
      {/if}

      <div class="introCard__subContent__tags">
        {#each item.tags as tag}
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

      <div class="introCard__purchase">
        <Wishlist 
          fullWidth 
          favorite={item.in_wishlist}
        />

        <div class="introCard__purchase-price">
          <b class={item.sale_price ? "introCard__purchase-price-sale" : ""}>{item.price}</b>
          {#if item.sale_price}
            <b>{item.sale_price}</b>
          {/if}
          <Clickable
            className="introCard__purchase-buyButton"
          >
            <span>Buy Now</span>
          </Clickable>
        </div>
      </div>

    </div>
  </div>
{/if}