<script>
	import { currentPage } from '$lib/assets/js/store';
	import { onMount } from 'svelte';

	export let categories = []

		//highlight active category
		let url = "";
		currentPage.subscribe(value => {url = value;});
		let cat = url.slice(15).replaceAll("%20", " ");

</script>

<nav class="secondary-nav">
	<h2>Categories</h2>
	<ul>
		<li class="secondary-nav__categories">
			<li class="{ cat === '' ? 'active' : '' } category">
				<a href="/blog">all</a>
			{#each categories as category}
					<li class="{ category.title === cat ? 'active' : '' } category">
						<a href="/blog/category/{category.title}">
							{category.title}
						</a>
					</li>
			{/each}
		</li>
	</ul>
</nav>



<style lang="scss">
	.secondary-nav {
    border-top: 3px solid var(--bright-green);
	}

	.category.active { background: var(--bright-green)}

	h2 {
		text-transform: uppercase;
    font-size: var(--base);
    margin: var(--xs2) 0;
	}

</style>