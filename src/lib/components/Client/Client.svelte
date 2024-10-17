<script lang="ts">
  import "$lib/styles/_client.scss";
	import { ArrowLeft, ArrowRight, CloseLogo, CopyLogo, DashLogo, FriendsLogo, FullsizeLogo, RingLogo } from "$lib/components/Icon/IconName";
	import ClientItem from "./ClientItem.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import { get } from "svelte/store";
	import { clientStore } from "$lib/utils/store";
	import Notification from "../Icon/Notification.svelte";
	import DropdownProfile from "../DropdownProfile.svelte";

  function handleClientClick(selectedItem: any) {
    client.forEach(item => {
      item.selected = (item.id === selectedItem.id);
    })
  }

  $: ({ header: { client }, badgeNumber, username, balance } = get(clientStore));
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
    {#if Array.isArray(client)}
      {#each client as clientItem}
        {#key `primary_${clientItem.id}`}
          <ClientItem name={clientItem.title} selected={clientItem.selected} onClick={_ => handleClientClick(clientItem)}/>
        {/key}
      {/each}
    {/if}
  </div>

  <div class="primaryHeaderRight">
    <Icon iconName={FriendsLogo} border className={"mr-10"}/>
    <Notification {badgeNumber} />
    <DropdownProfile />
    <span class={"headerText"}>Help</span>
    <span class={"headerText dropdown"}>View</span>
    <Icon iconName={DashLogo} className={"w-20 mr-15"}/>
    <Icon iconName={CopyLogo} className={"w-20 mr-15"}/>
    <Icon iconName={CloseLogo} className={"w-20 mr-25"}/>
  </div>
</div>
