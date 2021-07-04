<script>
  import PostCard from "$lib/components/PostCard.svelte";
  import { getPosts } from "$lib/utils/getPosts";
  import { onMount } from "svelte";
  import { dataset_dev } from "svelte/internal";

  let posts = getPosts();
</script>

{#await posts}
  <h1>Loading...</h1>
{:then value}
  {#each value as item}
    <PostCard title={item.data.title} imgUrl={item.data.url} data={item.data} />
  {/each}
{:catch error}
  <h3>{error.message}</h3>
{/await}

<!-- <PostCard
  imgUrl="https://image.shutterstock.com/image-vector/sample-stamp-square-grunge-sign-260nw-1474408826.jpg"
/>
<PostCard />
<PostCard />
<PostCard />
<PostCard />
<PostCard /> -->
