<script lang="ts">
  import { onMount } from 'svelte';
  import { sleep } from '$lib/utils';

  export let showDoce = false;
  export let showAzedo = false;
  export let enableTransitions = true;
  export let color = 'var(--primary)';

  let showLogo = false;

  onMount(async () => {
    if (!enableTransitions) {
      showLogo = true;
      showDoce = true;
      showAzedo = true;
      return;
    }

    await sleep(100);
    showLogo = true;
    await sleep(1);
    showDoce = true;
    await sleep(100);
    showAzedo = true;
  });
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1024.51 978.24"
  class:hide={!showLogo}
  class:is-animated={enableTransitions}
  fill={color}
>
  <!-- Path pertama dengan fill color dinamis -->
  <path
    class:hide={!showDoce}
    d="M1024.51 107.58v569.08l-185.84 109.34V590.55l2.72-1.59-2.72-1.6V202.92L683.84 294.01l-0.97 0.59-170.86 100.54-170.88-100.56-0.46-0.27-154.84-91.11v583.12L0 676.97V107.25l11.38-6.71L182.25 0l3.58 2.1 154.84 91.12 171.32 100.82 171.85-101.12L838.67 1.8l3.04-1.78 170.88 100.54z"
    fill={color}
  />

  <!-- Path kedua dengan fill color dinamis -->
  <path
    class:hide={!showAzedo}
    d="M683.84 681.67v195.45l-4.38 2.58-167.49 98.54-166.06-97.71-5.24-3.09V680.33l172.71 101.63L683.84 681.67z"
    fill={color}
  />
</svg>

<style lang="sass">
  svg
    overflow: visible

    &.hide
      display: none

    &.is-animated
      transition: all .2s ease .2s

      path
        transition: all .2s ease

    path.hide
      opacity: 0

      &:first-child
        transform: translateY(-18px)

      &:last-child
        transform: translateY(18px)
</style>
