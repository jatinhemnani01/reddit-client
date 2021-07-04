<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";

  export let imgUrl = "";
  export let subreddit = "";
  export let title = "";

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
      {:else}
        <div
          class="bg-gray-700 flex justify-center 
        h-20 items-center"
          id="post-image"
        >
          <i style="font-size: 30px; color: black;" class="fa fa-sticky-note" />
        </div>
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
