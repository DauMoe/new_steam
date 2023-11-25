<script lang="ts">
  import type { HeaderType, HeaderSize } from './Header';

  export let type: HeaderType = "header";
  export let size: HeaderSize = "medium";
  
</script>

<span class={`${type} ${size}`}>
  <slot/>
</span>