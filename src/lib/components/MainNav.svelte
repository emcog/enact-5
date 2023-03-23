<script>
  import { navItems } from '$lib/config'
  import { isMenuOpen } from '$lib/assets/js/store'
  import NavItem from './NavItem.svelte'

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleNavClick() {
    dispatch('navClick')
  }

</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
  <ul>
    {#each navItems as page}
    <NavItem class="nav-item" href={page.route}>
      {page.title}
    </NavItem>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .main-nav {
    z-index: 2;
    margin:6px 0 0 auto;
    pointer-events: none;
    display: flex;
    transition: all .25s cubic-bezier(0.785, 0.135, 0.15, 0.86);



    &.open {
      transform: translateX(0);
      opacity: 1;
      pointer-events: unset;
      visibility: unset;

      li {
        opacity: 0;
        animation: slide_in_left .2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;

        a {color: inherit;
        }

        // Probably shouldn't have more than 8 main nav menu items, but if you do, you can adjust this
        @for $i from 1 through 8 {
          &:nth-of-type(#{$i}) {
            animation-delay: 0.15s + $i * 0.05s;
          }
        }
      }
    }

    .menu-button {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }


    ul li {
      font-size: 1.2rem;
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: calc(.2rem + 2vh);
    }

    @media (min-width: vars.$smMin) {
      opacity: 1;
      transform: none;
      position: unset;
      height: auto;
      width: auto;
      background: unset;
      pointer-events: unset;
      visibility: unset;
      color: inherit;

      ul {
        width: max-content;

        li {
          font-size: inherit;
          display: initial;
          width: initial;
          text-align: initial;
          margin-bottom: 0;
        }
      }
    }
  }
</style>