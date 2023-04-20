<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';
	import { siteDescription } from '$lib/config'


	export let data


</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--todo update below-->
<!--<h1>category/+page.svelte</h1>-->
<!--<SecondaryNav categories={data.categories}/>-->
<PostsList posts={data.posts} />
<Pagination currentPage={1} totalPosts={data.total} />



<!--<script>-->
<!--	export let data-->
<!--  const { uniqueCategories } = data-->
<!--	// import SecondaryNav from '$lib/components/SecondaryNav.svelte';-->
<!--</script>-->


<!--<svelte:head>-->
<!--	<title>Blog | Categories</title>-->
<!--</svelte:head>-->


<!--<div class="compressed-content">-->
<!--	<h1 class="h2">All blog categories</h1>-->
<!--	-->
<!--	<ul>-->
<!--		{#each uniqueCategories as category}-->
<!--		<li>-->
<!--			<a href="/blog/category/{category.title}">-->
<!--				{ category.title }-->
<!--			</a>-->
<!--			({category.count})-->
<!--		</li>-->
<!--		{/each}-->
<!--	</ul>-->
<!--</div>-->