<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import PostType from "$lib/components/PostType.svelte";
</script>

<Navbar />
<hr />
<PostType />
<slot />

<style>
  :global(a) {
    background-color: #111827;
  }
</style>
