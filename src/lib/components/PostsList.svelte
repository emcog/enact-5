<script>
  export let posts = []
  import Card from './Card.svelte';
  console.log(posts)
</script>

<ul class="posts-list">
  {#each posts as post}
      <li class="posts-list__post">
        <a href="/blog/{post.slug}">
        <Card card="{post}" />
        </a>
      </li>
  {/each}
</ul>

<style lang="scss">

  ul,{
    grid-column: 1/-1;
    @media(min-width: vars.$for-tablet-portrait-up) { grid-column: 3/-1; }
    @media(min-width: vars.$for-tablet-landscape-up) { grid-column: 3/-1; }
    padding-inline-start: 0px;
  }

 li {
   list-style: none;
    grid-column: 1/-1;
    width: 100%;

  @media(min-width: vars.$for-tablet-portrait-up) {
    grid-column: 5/-1;
    display: grid;
  }

    @media(min-width: vars.$for-tablet-landscape-up) { grid-column: 4/-1; }
}

.posts-list__post { margin: 0 0 var(--sm) 0}

a { text-decoration: none; }
</style>