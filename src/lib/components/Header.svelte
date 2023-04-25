<script>
  import MainNav from './MainNav.svelte'
  import HamburgerMenuButton from './HamburgerMenuButton.svelte'
  import { siteTitle } from '$lib/config'


  const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
  <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
    Skip to main content
  </a>

  <div id="logo-nav-wrapper">
    <a href="/" class="site-title">{siteTitle}</a>
    <!--  <HamburgerMenuButton />-->
    <MainNav class="main-nav" />
    <!--  <SecondaryNav/>-->
  </div>

</header>

<style lang="scss">

  header {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, .8);
    display: flex;
    grid-column: 1/-1;
    //box-shadow: var(--brand-shadow);


    a {
      text-decoration: none;
      &.active { box-shadow: var(--brand-shadow-green); }
    }


    .site-title {
      font-family: var(--brand-sans);
      //font-size: vars.$xl2;
      color: inherit;
      margin: 0;
      font-size: 1.4rem;
      font-weight: bold;

      @media (min-width: vars.$smMin) {font-size: 1.6rem;}
    }

    .menu-button {
      margin: 0;
      background: transparent !important;
      color: inherit;
      padding: 0;
      border: 0;
      width: 2rem;

      @media (min-width: vars.$smMin) {
        display: none;
      }
    }
  }

  #logo-nav-wrapper {
    margin: vars.$base vars.$xs 0 vars.$xs;
    @media(min-width: vars.$for-tablet-landscape-up ) { margin: vars.$base vars.$xl vars.$lg vars.$xl; }
    @media(min-width: vars.$for-desktop-up) { margin: vars.$base vars.$xl5 vars.$lg vars.$xl; }

    display: flex;
    width: 100%;
  }


  .main-nav{
    margin-left: auto;
  }





</style>