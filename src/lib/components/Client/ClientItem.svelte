<script lang="ts">
  export let name: string;
  export let selected: boolean = false;

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

<div class="clientItem">
  <span class={selected ? "selected" : ""}>{title}</span>
</div>