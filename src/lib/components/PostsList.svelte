<script>
  export let posts = []
  import Card from './Card.svelte';
</script>

<ul class="posts-list">
  {#each posts as post}

    <li class="posts-list__post">
      <Card slug="{post.slug}"
            coverImage="{post.coverImage}"
            alt="{post.alt}"
            coverWidth="{post.coverWidth}"
            coverHeight="{post.coverHeight}"
            title="{post.title}"
            excerpt="{post.excerpt}"
            categories="{post.categories}"
      />
    </li>
  {/each}
</ul>

<style lang="scss">

.posts-list {
  grid-column: 1/-1;
  grid-row: 3/-1;
  display: flex;
  flex-direction: column;
  margin: 0;
  grid-template-columns: repeat(12, 1fr);
  list-style-type: none;
  padding: 0;

  @media(min-width: vars.$for-tablet-portrait-up) {
    grid-column: 5/-1;
    grid-row: 1/-1;
  }
  @media(min-width: vars.$for-tablet-landscape-up) { grid-column: 4/-1; }
}

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