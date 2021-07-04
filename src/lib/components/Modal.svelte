<script>
  import { fly } from "svelte/transition";
  export let isOpen = false;
</script>

{#if isOpen}
  <div
    transition:fly={{ duration: 300, y: -300 }}
    class="modal"
    on:click={() => (isOpen = false)}
  >
    <div class="backdrop" />

    <div class="content-wrapper">
      <div class="content flex flex-col justify-center items-center">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  div.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.backdrop {
    position: absolute;
    /* width: 100%; */
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
  div.content-wrapper {
    z-index: 10;
    max-width: 70vw;
    border-radius: 0.3rem;
    background-color: white;
    overflow: hidden;
  }
  div.content {
    overflow: auto;
  }
</style>
