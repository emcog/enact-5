import fetchPosts from '$lib/assets/js/fetchPosts'
import { error } from '@sveltejs/kit'

export const prerender = true


export const GET = async () => {
	try {

		const posts = await fetchPosts()
		let uniqueCategories = await fetchPosts();

		uniqueCategories = {};

		posts.posts.forEach(post => {
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


		return new Response(
			JSON.stringify(sortedUniqueCategories),
			{
				status: 200,
				headers: {
					'content-type': 'application/json'
				}
			}
		)
	}


	catch(err) {
		throw error(500, `Could not fetch unique categories. ${err}`)
	}
}

