<script lang="ts">
  import "$lib/styles/_searchBox.scss";
  import SearchIcon from "$lib/assets/icons/Search.png";

  let searchValue: string;

  export let className: string = "";
  export let onSearch = (value: string) => {};
</script>

<div class={["searchBox-wrapper", className].join(' ')}>
  <input type="text" class="searchBox" placeholder="Search..." bind:value={searchValue} on:keyup={e => {
    if (e.key == "Enter") onSearch(searchValue);
  }}/>
  <img class="searchIcon" src={SearchIcon} alt="search icon" on:click={_ => onSearch(searchValue)}/>
</div>