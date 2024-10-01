<script lang="ts">
  import '../../assets/css/prism-material-dark.css';
  import _ from '$lib/lang';
  import { Metadata, PageTitle, SubtitleWithIcon } from '$lib/components';
  import ArtGrid from '$lib/components/gallery/ArtGrid.svelte';


</script>

<Metadata title={$_.gallery.title} />
<PageTitle title={$_. gallery.title} subtitle={$_.gallery.paragraph} />

<article class="content">
  <ArtGrid />
</article>

