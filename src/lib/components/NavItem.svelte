<script>
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'

  export let href

  let isCurrentPage;

  $: isCurrentPage = $currentPage.startsWith(href)

  const maybeCloseMenu = () => {
    if (href != $currentPage) {
      isMenuOpen.set(false)
    }
  }
</script>


<li>
  <a
    href={href}
    on:click={maybeCloseMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>

<style lang="scss">


  li {margin: 0 0 0 var(--base)}

  a {
    padding: vars.$sm vars.$sm var(--base) vars.$sm;
    //padding: vars.$base;
    margin: 0 ;

    &:hover {
      color: var(--brand-black);
      //border-bottom: var(--brand-mid-grey) solid 2px;
      text-decoration: none;
    }

    & .active { /* see _header-and-footer*/}


  }
</style>