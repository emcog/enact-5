import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params, url }) => {
	const category = params.category
  const page = params.page || 1
	const options = { category, limit: -1 }
	const { posts } = await fetchPosts(options)




	// const uniqueCategories = await fetch(`${url.origin}/api/posts/categories.json`)
	// const categories = uniqueCategories.json()


	let uniqueCategories = {}

	posts.forEach(post => {
		post.categories.forEach(category => {
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				}
			}
		})
	})

	const sortedUniqueCategories =
		Object.values(uniqueCategories)
			.sort((a, b) => a.title > b.title)


	return {
		posts,
		category,
		sortedUniqueCategories,
		page,
		total: posts.length
	}
}
