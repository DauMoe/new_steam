<script lang="ts">
  //Wrapper the carousel, include arrow left, arrow right, pagination
  export let title: string | undefined;
</script>

{#if title}
  <div class="carousel-title">
    <span>{title}</span>
  </div>
{/if}

<div>
  <slot/>
</div>