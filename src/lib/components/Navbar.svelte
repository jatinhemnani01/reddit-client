<script>
  import { subreddit } from "$lib/stores/subreddit";

  let val = "";
  let timer;

  // let suggestions = [
  //   "AskReddit",
  //   "Gaming",
  //   "Aww",
  //   "Science",
  //   "Videos",
  //   "TodayiLearned",
  //   "Movies",
  //   "Gifs",
  //   "LifeProTips",
  //   "Space",
  //   "DIY",
  //   "CryptoCurrency",
  //   "AskRedditAfterDark",
  // ];

  let suggestions = [];
  async function getSuggestions(v) {
    let res = await fetch(`https://www.reddit.com/search.json?q=${v}&type=sr`);
    let data = await res.json();
    let main = data.data.children;
    const mapped = main.map((post) => post.data.display_name);
    suggestions = mapped;
  }

  const debounce = (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getSuggestions(v);
    }, 300);
  };

  // https://www.reddit.com/search.json?q=programming&type=<sr></sr>
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
        bind:value={val}
        on:keyup={({ target: { value } }) => debounce(value)}
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
