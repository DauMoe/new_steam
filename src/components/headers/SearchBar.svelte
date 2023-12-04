<script lang="ts">
  import SearchIcon from "assets/icons/Search.svg";
  import { GenSubClass } from "components/Utility";
  
  const { genSubClass, getRootClass } = new GenSubClass("search-bar");
</script>

<div class={getRootClass()}>
  <span class={genSubClass('__placeholder')}>Search...</span>
  <div class={genSubClass('__icon')}>
    <img src={SearchIcon} alt="search icon"/>
  </div>
</div>