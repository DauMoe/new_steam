<script lang="ts">
  import SteamLogo from 'assets/icons/People.svg';
  import ArrowDownWhite from 'assets/icons/ArrowDownWhite.svg';

  let avatarUrl: string = SteamLogo;
  let username: string = "Test User";
  let balance: string = "$0";
</script>

<div class="avatar">
  <img src={avatarUrl} class="avatar__img" alt="avatar"/>
  <p class="avatar__username">{username}</p>
  <p class="avatar__balance">{balance}</p>
  <img src={ArrowDownWhite} class="avatar__expand-icon mr-8" alt="arrow down"/>
</div>