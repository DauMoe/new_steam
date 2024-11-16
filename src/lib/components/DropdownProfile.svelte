<script lang="ts">
	import { clientStore } from "$lib/store/user";
	import { get } from "svelte/store";
  import Logo from "$lib/assets/icons/MediumLogo.png";

  function handleFallbackAvatarUrl(url: string): string {
    if (!url || url === "") return Logo;
    return url;
  }

  $: ({ username, balance, avatarUrl } = get(clientStore));
</script>

<div class="dropdownProfile">
  <img src={handleFallbackAvatarUrl(avatarUrl)} alt="avatar"/>
  <span class="username">{username}</span>
  <span class="balance">{balance}</span>
</div>