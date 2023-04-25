<script>
	import { currentPage } from '$lib/assets/js/store';

	export let categories = []

	//highlight active category
	let url = "";
	currentPage.subscribe(value => {url = value;});
	let cat = url.slice(15).replaceAll("%20", " ");

</script>

<nav class="secondary-nav">
			{#if !categories[0].title}<h2>Posted in</h2>{:else}<h2>Categories</h2>{/if}
			<ul>
				{#if categories[0].title}
					<li class="{ cat === '' ? 'active' : '' } category">
						<a href="/blog">all</a>
					</li>
				{/if}

				{#each categories as category}
					{#if category.title }
						<li class="{ category.title === cat ? 'active' : '' } category">
							<a href="/blog/category/{category.title}">{category.title}</a>
						</li>
					{:else}
						<li class="{ category.title === cat ? 'active' : '' } category">
							<a href="/blog/category/{category}">{category}</a>
						</li>
					{/if}
				{/each}
			</ul>
</nav>



<style lang="scss">

	h2 {
		text-transform: uppercase;
    font-size: var(--base);
    margin: var(--xs2) 0;
	}

	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 350px;
    @media(min-width: vars.$for-tablet-landscape-up) { flex-direction: column}
	}

</style>