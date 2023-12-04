<script lang="ts">
  import classNames from "classnames";

  export let text: string;
  export let customClass: classNames.ArgumentArray = [];
  export let onPress: Function = () => {};
</script>

<div class={classNames("hoverable", ...customClass)} on:click={onPress}>
  <p class="hoverable__text">{text?.trim()}</p>
</div>