<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  import Modal from "$lib/components/Modal.svelte";

  export let imgUrl = "";
  export let subreddit = "";
  export let title = "";
  export let data;
  export let upvote;
  export let commentsCount;
  export let author = "";

  let isOpen = false;
  function getVideoUrl(post) {
    if (post.media) {
      return post.media.reddit_video.fallback_url;
    }
    const parts = post.url.split(".");
    parts.pop();
    return parts.concat("mp4").join(".");
  }

  function isVideo(post) {
    return post.media || post.url.match(/mp4|gifv|mkv|mov|webm$/);
  }

  function isImage(url) {
    return url.match(/png|jpg|jpeg|gif|wepb$/);
  }
</script>

<div
  id="card"
  class="rounded shadow border w-full bg-gray-800 mt-1 text-gray-300 "
>
<div class="mt-1 ml-2 font-medium text-blue-400 ml-5">r/{subreddit}</div>
  <div class="ml-5 text-sm text-gray-500 mt-2">
    Posted by <span class="text-yellow-600">u/{author}</span>
  </div>
  <div class=" flex flex-col justify-between p-2 ">
    <div class="text-xl font-bold  flex ml-5 items-center mb-5">{title}</div>
    <div class="flex justify-center ">
      {#if isImage(imgUrl)}
        <img
          on:click={() => (isOpen = !isOpen)}
          id="post-image "
          src={imgUrl}
          alt={title}
          class="rounded object-contain max-w-lg min-w-0"
        />
      {/if}
      {#if isVideo(data)}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video controls loop class="rounded object-contain max-w-lg min-w-0">
          <source type="video/mp4" src={getVideoUrl(data)} />
        </video>
      {/if}
    </div>
  </div>
  <hr style="border-top: 1px solid white;" />
  <ActionButtons {commentsCount} {upvote} />
</div>

<Modal {isOpen}>
  <div class="modal-header " style="object-fit: cover;" />
  <img
    style="
    height: 90vh;
    width: 100%;
    object-fit: contain;
    background-color: #1b1b1b;"
    src={imgUrl}
    alt={title}
  />
</Modal>

<style>
  #card:hover {
    border: solid 1px orange;
  }
  #card {
    width: 70%;
  }

  @media screen and (max-width: 550px) {
    #card {
      width: 80%;
    }
  }
  @media screen and (max-width: 430px) {
    #card {
      width: 100%;
    }
  }
</style>
