export const load = async ({ url }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`)
	const posts = await postRes.json()

	const totalRes = await fetch(`${url.origin}/api/posts/count.json`)
	const total = await totalRes.json()

	const uniqueCategories = await fetch(`${url.origin}/api/posts/categories.json`)
	const categories = uniqueCategories.json()

	return { posts, total, categories }
}


// export const load = async ({ url, fetch }) => {
// 	const res = await fetch(`${url.origin}/api/posts.json`)
// 	let posts = await res.json()
//
// 	let uniqueCategories = {}
//
// 	posts.forEach(post => {
// 		post.categories.forEach(category => {
// 			if (uniqueCategories.hasOwnProperty(category)) {
// 				uniqueCategories[category].count += 1
// 			} else {
// 				uniqueCategories[category] = {
// 					title: category,
// 					count: 1
// 				}
// 			}
// 		})
// 	})
//
// 	const sortedUniqueCategories =
// 		Object.values(uniqueCategories)
// 			.sort((a, b) => a.title > b.title)
//
// 	return {
// 		uniqueCategories: sortedUniqueCategories
// 	}
// }
