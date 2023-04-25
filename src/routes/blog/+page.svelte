<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data
</script>


<svelte:head>
	<title>Case studies</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<!--<div id="page-title">-->
<!--	<h1>Case studies</h1>-->
<!--	<p>Take an indepth read into my creative process and how I have worked with teams</p>-->
<!--	<p>Have a look at the <a href='/gallery'>gallery</a> for an overview of some favourite projects</p>-->
<!--</div>-->

<SecondaryNav categories={data.categories}/>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />

<style lang="scss">
	#page-title {
		grid-column: 1/-1;
		grid-row: 1/2;
    @media(min-width: vars.$for-tablet-landscape-up) {grid-column: 3/-1 ;}
	}
</style>