<script>
  import { page } from "$app/stores";
  import PostCard from "$lib/components/PostCard.svelte";
  import { loading } from "$lib/stores/loading";
  import { onMount } from "svelte";
  const { subreddit, id } = $page.params;

  let comments = [];
  let child = [];

  async function getComments() {
    $loading = true;
    let res = await fetch(
      `https://www.reddit.com/r/${subreddit}/comments/${id}.json`
    );
    let data = await res.json();
    let single = data[0].data.children;
    child = single;
    let com = data[1].data.children;
    comments = com.splice(0, 50);
    $loading = false;
  }

  onMount(() => {
    getComments();
  });
</script>

{#each child as item}
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

{#each comments as item}
  <div>{item.data.body}</div>
{/each}
