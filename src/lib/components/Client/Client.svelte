<script>
  import "$lib/styles/_client.scss";
	import { ArrowLeft, ArrowRight, FriendsLogo, FullsizeLogo, RingLogo } from "$lib/components/Icon/IconName";
	import ClientItem from "./ClientItem.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import { get } from "svelte/store";
	import { clientStore } from "$lib/utils/store";
	import Notification from "../Icon/Notification.svelte";
	import DropdownProfile from "../DropdownProfile.svelte";

  $: ({ header: { primary }, badgeNumber, username, balance } = get(clientStore));
</script>

<div class="clientWrapper">
  <div class="navigator">
    <Icon iconName={ArrowLeft} className="w-24"/>
    <Icon iconName={ArrowRight} className="w-24"/>
  </div>
  <a href="/">
    <Icon iconName={FullsizeLogo} className="logo"/>
  </a>

  <div class="primaryHeaderLeft">
    {#if Array.isArray(primary)}
      {#each primary as primaryItem, index}
        <ClientItem name={primaryItem.title} selected={primaryItem.selected} />
      {/each}
    {/if}
  </div>

  <div class="primaryHeaderRight">
    <Icon iconName={FriendsLogo} border/>
    <Notification {badgeNumber} />
    <DropdownProfile />
  </div>
</div>
