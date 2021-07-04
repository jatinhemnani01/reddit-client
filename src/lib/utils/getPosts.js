export async function getPosts() {
  const url = "https://www.reddit.com/r/aww/.json?limit=10";
  let res = await fetch(url);
  let data = await res.json();
  return data.data.children;
}
