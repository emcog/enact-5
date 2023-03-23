<script>
  import MainNav from './MainNav.svelte'
  import { siteAuthor, socials } from '$lib/config'
</script>

<footer>
<!--  <MainNav />-->
  <p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
  <nav>
    <ul>
      {#each socials as social}
        {#if social.display}
        <li><a href="{social.link}">
          {#if social.icon}
            <img src="{social.icon}" alt="{social.title}">
          {:else}
            <p>{social.title}</p>
          {/if}
        </a></li>
          {/if}
      {/each}
        <!--        <a href="/api/rss.xml" rel="external">RSS</a>-->
        <!--      </li>-->
        <!--      <li>-->
        <!--        <a href="/">Home</a>-->
    </ul>
  </nav>


</footer>

<style lang="scss">


  footer {
    //grid-row: -2/-1;
    grid-column: 1/-1;
    display: flex;
    margin: vars.$base vars.$xl vars.$xl vars.$xl;
    justify-items: center;

    nav {
      margin: 0 vars.$xs 0 auto;

      ul {
        gap: 0 vars.$base;
      }
    }

    p {
      margin: 0;
      font-size: vars.$sm;
    }

    a { color: inherit; }

  }

</style>