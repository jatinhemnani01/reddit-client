<script>
  import { postType } from "$lib/stores/postType";
  import { loading } from "$lib/stores/loading";
  import { subreddit } from "$lib/stores/subreddit";
  import { posts } from "$lib/stores/posts";
  import { onMount } from "svelte";
  import { limit } from "$lib/stores/limit";
  let current = "hot";

  async function getPosts(sr, limit, postType, after) {
    try {
      $posts = [];
      $loading = true;
      const url = `https://www.reddit.com/r/${sr}/${postType}.json?limit=${limit}&after=${after}`;
      let res = await fetch(url);
      let data = await res.json();
      $posts = data.data.children;
      $loading = false;
    } catch (error) {
      $loading = true;
      throw error;
    }
  }

  onMount(() => {});

  function getSelected(sel) {
    current = sel;
    $postType = sel;

    getPosts($subreddit, $limit, $postType, "");
  }
</script>

<div
  class="flex w-full text-center justify-evenly list-none bg-gray-900 text-white p-3 text-base"
>
  <li
    on:click={() => getSelected("best")}
    class="cursor-pointer"
    class:selected={current === "best"}
  >
    <i class="fa fa-rocket" /> Best
  </li>
  <li
    on:click={() => getSelected("hot")}
    class="cursor-pointer"
    class:selected={current === "hot"}
  >
    <i style="font-size: 20px;" class="fa fa-fire" /> Hot
  </li>
  <li
    on:click={() => getSelected("new")}
    class:selected={current === "new"}
    class="cursor-pointer"
  >
    <i class="fa fa-life-ring" /> New
  </li>

  <li
    on:click={() => getSelected("top")}
    class="cursor-pointer"
    class:selected={current === "top"}
  >
    <i style="font-size: 17px;" class="fa fa-arrow-up" /> Top
  </li>
</div>

<style>
  .selected {
    border-bottom: 3px solid orange;
  }
</style>
