<script>
  let current = "best";
  function getSelected(sel) {
    current = sel;
  }
</script>

<div
  class="flex w-full text-center justify-evenly list-none bg-gray-900 text-white p-3 text-base"
>
  <li
    on:click={() => getSelected("best")}
    class="cursor-pointer"
    class:selected={current === "best"}
  >
    <i class="fa fa-rocket" /> Best
  </li>
  <li
    on:click={() => getSelected("hot")}
    class="cursor-pointer"
    class:selected={current === "hot"}
  >
    <i style="font-size: 20px;" class="fa fa-fire" /> Hot
  </li>
  <li
    on:click={() => getSelected("new")}
    class:selected={current === "new"}
    class="cursor-pointer"
  >
    <i class="fa fa-life-ring" /> New
  </li>

  <li
    on:click={() => getSelected("top")}
    class="cursor-pointer"
    class:selected={current === "top"}
  >
    <i style="font-size: 17px;" class="fa fa-arrow-up" /> Top
  </li>
</div>

<style>
  .selected {
    border-bottom: 3px solid orange;
  }
</style>
