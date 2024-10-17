<script lang="ts">
  export let onClick = (e: MouseEvent) => {};
  export let className: string = "";
  export let disable: boolean = false;
</script>

<svelte:element
  this={"div"}
  on:click={onClick}
  role="button"
  tabindex="0"
  class={`clickable ${className}`}
  aria-disabled={disable}
>
  <slot/>
</svelte:element>