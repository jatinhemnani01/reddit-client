<script>
  import { subreddit } from "$lib/stores/subreddit";

  const suggestions = [
    "AskReddit",
    "Gaming",
    "Aww",
    "Science",
    "Videos",
    "TodayiLearned",
    "Movies",
    "Gifs",
    "LifeProTips",
    "Space",
    "DIY",
    "CryptoCurrency",
    "AskRedditAfterDark",
  ];
</script>

<nav class="w-full bg-gray-900 flex flex-row item-center justify-between ">
  <div class="flex flex-row item-center ">
    <img
      id="logo"
      class="w-12 ml-4 mt-1 mb-1"
      src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
      alt="Reddit Logo"
    />

    <form class="flex flex-row items-center ml-5 justify-center ">
      <input
        autocomplete="off"
        list="list"
        id="input"
        type="text"
        placeholder="Search Subreddit"
        class="flex justify-center item-center h-8 p-2 rounded bg-gray-700 placeholder-gray-400 outline-none text-white focus:placeholder-white focus:placeholder-gray-300"
      />
      <datalist id="list">
        {#each suggestions as subreddits}
          <option value={subreddits} />
        {/each}
      </datalist>
    </form>
  </div>
  <ul
    id="list"
    class="text-white flex flex-row items-center justify-between list-none mr-5"
  >
    <li class="mr-5">Popular</li>
    <li>r/{$subreddit}</li>
  </ul>
</nav>

<style>
  @media screen and (max-width: 507px) {
    #input {
      width: 150px;
    }
    #logo {
      width: 30px;
      height: 30px;
    }
    #list {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 443px) {
    #input {
      width: 100px;
    }
  }
</style>
