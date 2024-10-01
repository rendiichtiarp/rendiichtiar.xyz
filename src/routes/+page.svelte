<script lang="ts">
  import { Blurb, Metadata } from '$lib/components';
  import { POSTS } from '$lib/components/posts';
  import GalleryLatest from '$lib/components/gallery/GalleryLatest.svelte'
  import PostsLatest from '$lib/components/posts/PostsLatest.svelte';

  export let data;

  $POSTS = data.posts;
</script>

<Metadata />
<Blurb />
<GalleryLatest />
<PostsLatest />
