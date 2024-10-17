<script lang="ts">
	import Clickable from "../Clickable.svelte";

  export let name: string;
  export let selected: boolean = false;
  export let onClick = (item: any) => {};

  function handleName(name: string) {
    if (name.startsWith("$")) {
      switch (name) {
        case "$username":
          return "DauMoe"
        default:
          return name;
      }
    }
    return name;
  }

  $: title = handleName(name);
</script>

<Clickable className="clientItem" {onClick}>
  <span class={selected ? "selected" : ""}>{title}</span>
</Clickable>