<script>
  export let upvote = 20;
  export let commentsCount = "";
  export let href = "";
</script>

<div class="flex justify-evenly p-2">
  <div title="Upvotes"><i class="fa fa-arrow-up" /> {upvote}</div>
  <div title="Downvotes"><i class="fa fa-arrow-down" /> Downvote</div>
  <a {href}
    ><div title="Comments">
      <i class="fa fa-sticky-note" />
      {commentsCount} Comments
    </div>
  </a>
</div>
