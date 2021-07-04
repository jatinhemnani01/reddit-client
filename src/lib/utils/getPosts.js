export async function getPosts() {
  const url = "https://www.reddit.com/r/memes/.json?limit=5";
  let res = await fetch(url);
  let data = await res.json();
  return data.data.children.map((item, i) => {
    return {
      title: item.data.title,
      author: item.data.author,
      img: item.data.url_overridden_by_dest,
    };
  });
}
