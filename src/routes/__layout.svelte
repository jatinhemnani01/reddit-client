<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import NProgress from "$lib/components/NProgress.svelte";
  import PostType from "$lib/components/PostType.svelte";
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";
  import { page } from "$app/stores";
</script>

<NProgress />
<Navbar />
<hr />

{#if $page.path === "/popular"}
  <div />
{:else if $page.params.subreddit}
  <div />
{:else}
  <PostType />
{/if}

<ScrollToTop />
<slot />

<style>
  :global(a) {
    background-color: #111827;
  }
</style>
