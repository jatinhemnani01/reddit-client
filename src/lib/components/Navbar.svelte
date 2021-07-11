<script>
  import { subreddit } from "$lib/stores/subreddit";
  import { posts } from "$lib/stores/posts";
  import { postType } from "$lib/stores/postType";
  import { loading } from "$lib/stores/loading";
  import { limit } from "$lib/stores/limit";

  let val = "";
  let timer;
  let suggestions = [];
  let afterPost = "";

  async function getPosts(sr, limit, postType, after) {
    try {
      $posts = [];
      $loading = true;
      const url = `https://www.reddit.com/r/${sr}/${postType}.json?limit=${limit}&after=${after}`;
      let res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        $posts = data.data.children;
        afterPost = data.data.after;
        $loading = false;
      }
    } catch (error) {
      throw error;
    }
  }

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
      if (v.length >= 3) {
        getSuggestions(v);
      }
      $subreddit = v;
    }, 200);
  };
</script>

<nav class="w-full bg-gray-900 flex flex-row item-center justify-between ">
  <div class="flex flex-row item-center ">
    <a href="/">
      <img
        loading="lazy"
        id="logo"
        class="w-12 ml-4 mt-1 mb-1"
        src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
        alt="Reddit Logo"
      />
    </a>

    <form
      on:submit|preventDefault={() => {
        getPosts($subreddit, $limit, $postType, afterPost);
        document.activeElement.blur();
      }}
      class="flex flex-row items-center ml-5 justify-center "
    >
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
    <a sveltekit:prefetch href="/popular"><li class="mr-5">Popular</li></a>
    <li>r/{$subreddit}</li>
  </ul>
</nav>

<style>
  @media screen and (max-width: 507px) {
    #input {
      width: 250px;
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
      width: 210px;
    }
  }
  @media screen and (max-width: 387px) {
    #input {
      width: 180px;
    }
  }

  @media screen and (max-width: 357px) {
    #input {
      width: 150px;
    }
  }
</style>
