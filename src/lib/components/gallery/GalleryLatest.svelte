<script lang="ts">
  import _ from '$lib/lang';
  import { SectionTitle } from '$lib/components';
  import ArtGrid2 from './ArtGrid2.svelte';
</script>

<section>
  <SectionTitle title={$_.blog.title} actionLabel={$_.blog.more} actionHref="/gallery" />
  <ArtGrid2 />
</section>

<style lang="sass">
  section
    margin-bottom: 3rem
</style>
