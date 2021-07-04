<script>
  export let upvote = 20;
  export let commentsCount = 0;
</script>

<div class="flex justify-evenly p-2">
  <div title="Upvotes"><i class="fa fa-arrow-up" /> {upvote}</div>
  <div title="Downvotes"><i class="fa fa-arrow-down" /> Downvote</div>
  <div title="Comments">
    <i class="fa fa-sticky-note" />
    {commentsCount} Comments
  </div>
</div>
