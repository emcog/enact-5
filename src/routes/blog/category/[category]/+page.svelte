<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage } from '$lib/config'
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

	export let data

  const { page, posts, category, sortedUniqueCategories, total } = data

	$: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
	$: upperBound = Math.min(page * postsPerPage, total)
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>

<!--<h1>category/[cat]/page.svelte Blog category: {category}</h1>-->

<!--<SecondaryNav categories={sortedUniqueCategories} activeCategory="{category}"/>-->

{#if posts.length}
	<PostsList posts={posts} />
	<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

	<p><a href="/blog">Back to blog</a></p>
{/if}