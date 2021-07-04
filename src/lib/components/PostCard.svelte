<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";

  export let imgUrl = "";
  export let subreddit = "";
  export let title = "";
  export let data;
  console.log(data);

  function getVideoUrl(post) {
    if (post.media) {
      return post.media.reddit_video.scrubber_media_url;
    }
    const parts = post.url.split(".");
    parts.pop();
    return parts.concat(".mp4").join("");
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
  class="rounded shadow border w-full bg-gray-800 mt-1 text-gray-300 cursor-pointer"
>
  <div class="mt-1 ml-2 font-medium">{subreddit}</div>
  <div class=" flex flex-row justify-between p-2">
    <div class="text-xl font-bold  flex ml-5">{title}</div>
    <div class="flex justify-center ">
      {#if isImage(imgUrl)}
        <img
          id="post-image"
          src={imgUrl}
          alt=""
          class="rounded object-contain"
        />
      {/if}
      {#if isVideo(data)}
        <!-- svelte-ignore a11y-media-has-caption -->
        <video width="200" controls>
          <source type="video/mp4" src={getVideoUrl(data)} />
        </video>
      {/if}
    </div>
  </div>
  <hr style="border-top: 1px solid white;" />
  <ActionButtons />
</div>

<style>
  #post-image {
    width: 9em;
  }
  @media screen and (max-width: 450px) {
    #post-image {
      width: 6em;
    }
  }
  #card:hover {
    border: solid 1px orange;
  }
</style>
