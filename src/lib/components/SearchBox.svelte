<script lang="ts">
  import "$lib/styles/_searchBox.scss";
  const id = `SearchBoxNo${new Date().getTime()}`;

  export let className: string = "";
</script>

<input type="search" hidden id={id}/>
<div aria-label={id} class="searchBox"></div>