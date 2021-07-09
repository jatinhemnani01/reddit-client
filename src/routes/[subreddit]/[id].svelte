<script context="module">
  export const prerender = true;

  export async function load({ page, fetch }) {
    const { subreddit, id } = page.params;
    let res = await fetch(
      `https://www.reddit.com/r/${subreddit}/comments/${id}.json`
    );
    let data = await res.json();
    let child = data[0].data.children;
    let com = data[1].data.children;
    let comments = com.splice(0, 50);

    return {
      props: {
        child,
        comments,
      },
    };
  }
</script>

<script>
  import CommentCard from "$lib/components/CommentCard.svelte";
  import Loading from "$lib/components/Loading.svelte";
  import PostCard from "$lib/components/PostCard.svelte";

  export let comments;
  export let child;
</script>

<svelte:head>
  <title>Reddit Client | Comments</title>
</svelte:head>

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
  <div
    class="flex flex-col items-center justify-center w-full"
    style="background-color: #22252b;"
  >
    <CommentCard
      author={item.data.author}
      title={item.data.body}
      upvote={item.data.ups}
    />
  </div>
{/each}
