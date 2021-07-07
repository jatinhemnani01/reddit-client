/** @type {import('@sveltejs/kit').Config} */
import vercel from "@sveltejs/adapter-vercel";

const config = {
  kit: {
    adapter: vercel(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
  },
};

export default config;
