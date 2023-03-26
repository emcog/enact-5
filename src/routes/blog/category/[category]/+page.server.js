import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params, url }) => {
	const category = params.category
  const page = params.page || 1
	const options = { category, limit: -1 }
	const { posts } = await fetchPosts(options)


	const uniqueCategories = await fetch(`${url.origin}/api/posts/categories.json`)
	const categories = uniqueCategories.json()

	return { 
		posts,
		category,
		categories,
		page,
		total: posts.length
	}
}
