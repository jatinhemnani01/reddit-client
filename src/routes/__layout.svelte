<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import PostType from "$lib/components/PostType.svelte";
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";
</script>

<Navbar />
<hr />
<PostType />
<ScrollToTop />
<slot />

<style>
  :global(a) {
    background-color: #111827;
  }
</style>
