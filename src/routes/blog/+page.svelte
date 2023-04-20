<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content={siteDescription}>
</svelte:head>

<h1>Case studies</h1>

<!--<SecondaryNav categories={data.categories}/>-->

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />