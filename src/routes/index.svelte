<script>
  import PostCard from "$lib/components/PostCard.svelte";
  import { onMount } from "svelte";
  import { posts } from "$lib/stores/posts";
  import { loading } from "$lib/stores/loading";
  import { subreddit } from "$lib/stores/subreddit";
  import { limit } from "$lib/stores/limit";
  import { postType } from "$lib/stores/postType";

  let afterPost = "";

  async function getPosts(sr, limit, postType, after) {
    try {
      $loading = true;
      const url = `https://www.reddit.com/r/${sr}/${postType}.json?limit=${limit}&after=${after}`;
      let res = await fetch(url);
      let data = await res.json();
      $posts = data.data.children;
      afterPost = data.data.after;
      $loading = false;
    } catch (error) {
      throw error;
      $loading = true;
    }
  }

  async function getPostsWith(sr, limit, postType, after) {
    try {
      $loading = true;
      const url = `https://www.reddit.com/r/${sr}/${postType}.json?limit=${limit}&after=${after}`;
      let res = await fetch(url);
      let data = await res.json();
      $posts = [...$posts, ...data.data.children];
      afterPost = data.data.after;
      $loading = false;
    } catch (error) {
      throw error;
      $loading = true;
    }
  }

  function loadMoreHandler() {
    window.addEventListener("scroll", () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (clientHeight + scrollTop >= scrollHeight - 5) {
        getPostsWith($subreddit, $limit, $postType, afterPost);
      }
    });
  }

  onMount(() => {
    getPosts($subreddit, $limit, $postType, "");
    loadMoreHandler();
  });
</script>

{#if $loading}
  <h1>Loading...</h1>
{/if}

{#each $posts as item}
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
