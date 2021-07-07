<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  import { fade } from "svelte/transition";
  export let title = "";
  export let author = "";
  export let upvote = 0;
</script>

<div
  in:fade={{ duration: 400, delay: 100 }}
  id="card"
  class="rounded shadow border w-full bg-gray-800 mt-1 text-gray-300 "
>
  <div class="ml-5 text-sm text-gray-500 mt-2">
    Posted by <span class="text-yellow-600">u/{author}</span>
  </div>
  <div class=" flex flex-col justify-between p-2 ">
    <div class="text-lg font-normal  flex ml-5 items-center mb-5">
      {title}
    </div>
    <div class="flex justify-center " />
  </div>
  <hr style="border-top: 1px solid white;" />
  <ActionButtons {upvote} />
</div>

<style>
  #card:hover {
    border: solid 1px orange;
  }
  #card {
    width: 90%;
  }

  @media screen and (max-width: 550px) {
    #card {
      width: 100%;
    }
  }
  @media screen and (max-width: 430px) {
    #card {
      width: 100%;
    }
  }
</style>
