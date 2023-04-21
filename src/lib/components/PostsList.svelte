<script>
  export let posts = []
  import Card from './Card.svelte';
</script>

<ul class="posts-list" id='content'>
  {#each posts as post}

    <li class="posts-list__post">
      <Card card="{post}" />
    </li>
  {/each}
</ul>

<style lang="scss">


li {
    grid-column: 1/-1;
    width: 100%;

  @media(min-width: vars.$for-tablet-portrait-up) {
    grid-column: 5/-1;
    display: grid;
  }

    @media(min-width: vars.$for-tablet-landscape-up) { grid-column: 4/-1; }
}

.posts-list__post { margin: 0 0 var(--sm) 0}
</style>