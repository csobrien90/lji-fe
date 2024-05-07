export const getPexelsImage = async (searchTerm: string): Promise<{ src: string, alt: string }> => {
	try {
		// Fetch images from Pexels API
		const res = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&orientation=landscape&size=medium&per_page=80`, {
			headers: {
				Authorization: `${process.env.PEXELS_API_KEY}`
			}
		})
		const data = await res.json()

		// Get a random photo from the search results
		const photo = data.photos.filter((photo: any) => {
			// Filter out photos by bad photographers
			const badPhotographerIds = [
				320794
			]

			if (badPhotographerIds.includes(photo.photographer_id)) return false

			return true
		})[Math.floor(Math.random() * data.photos.length)]
	
		// Return the src and alt text 
		return {
			src: photo.src.landscape,
			alt: photo.alt
		}
	} catch (error) {
		console.error(error)
		return { src: '', alt: '' }
	}
}