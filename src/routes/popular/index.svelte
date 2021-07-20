<script context="module">

  export async function load({ page, fetch }) {
    let res = await fetch("https://www.reddit.com/r/popular/hot.json?limit=10");
    let data = await res.json();
    const afterPost = data.data.after;
    return {
      props: {
        children: data.data.children,
        afterPost,
      },
    };
  }
</script>

<script>
  import { postType } from "$lib/stores/postType";
  import PostCard from "$lib/components/PostCard.svelte";
  import { loading } from "$lib/stores/loading";
  export let children;
  export let afterPost;

  async function getPostsWith(postType, after) {
    try {
      $loading = true;
      const url = `https://www.reddit.com/r/popular/${postType}.json?limit=10&after=${after}`;
      let res = await fetch(url);
      let data = await res.json();
      children = [...children, ...data.data.children];
      afterPost = data.data.after;
      $loading = false;
    } catch (error) {
      $loading = true;
      throw error;
    }
  }
</script>

{#each children as item}
  <div class="flex justify-center" style="background-color: #22252b;">
    <PostCard
      title={item.data.title}
      imgUrl={item.data.url}
      data={item.data}
      commentsCount={item.data.num_comments}
      upvote={item.data.ups}
      subreddit={item.data.subreddit}
      author={item.data.author}
      href="/{item.data.subreddit}/{item.data.id}"
    />
  </div>
{/each}

{#if children.length >= 5}
  <div class="flex justify-center" style="background-color: #22252b;">
    <button
      class="m-5 bg-yellow-400 p-3 text-lg font-medium w-60 rounded"
      on:click={() => {
        getPostsWith($postType, afterPost);
      }}
    >
      <i class={$loading ? "fa fa-refresh fa-spin mr-2" : ""} />{$loading
        ? "Loading"
        : "Load More"}</button
    >
  </div>
{/if}
