<script>
  import PostCard from "$lib/components/PostCard.svelte";
  import { getPosts } from "$lib/utils/getPosts";

  let posts = getPosts();
</script>

{#await posts}
  <h1>Loading...</h1>
{:then value}
  {#each value as item}
    <div class="flex justify-center" style="background-color: #22252b;">
      <PostCard
        title={item.data.title}
        imgUrl={item.data.url}
        data={item.data}
        commentsCount={item.data.num_comments}
        upvote={item.data.ups}
        subreddit={item.data.subreddit}
        author={item.data.author}
      />
    </div>
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
