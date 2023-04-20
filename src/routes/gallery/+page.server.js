export const load = async ({ url, fetch }) => {

	const uniqueCategories = await fetch(`${url.origin}/api/posts/categories.json`)
	const categories = uniqueCategories.json()

	return { categories }
}
