<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import SecondaryNav from '$lib/components/SecondaryNav.svelte';

export let data

const {
	title,
	excerpt,
	date,
	updated,
	coverImage,
	coverWidth,
	coverHeight,
	categories 
} = data.meta
const { PostContent } = data

	console.log('categories', data)
</script>


<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="content-wrapper">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->

	<h1>{ title }</h1>

	<p id="excerpt">{excerpt}</p>

	<img
		class="cover-image"
		src="{coverImage}"
		alt=""
	/>


	<svelte:component this={PostContent} />


</article>
<SecondaryNav categories={categories}/>


<style lang='scss'>

	#excerpt {
		margin: var(--xs2) 0 0 0;
		font-size: var(--base);
	}

	.cover-image {
		width: 100%;
		height: auto;
		margin: var(--base) 0;
	}
</style>