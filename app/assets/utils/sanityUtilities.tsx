import { SanityImage } from "../../types"

export const makeImageSrc = (imageObj: SanityImage): string => {
	// Build image src
	const srcArr = imageObj.asset._ref.split('-')
	let imageSrc = `${srcArr[1]}-${srcArr[2]}.${srcArr[3]}`

	// Add image query params
	imageSrc += '?w=600'

	// Return image src
	return (process.env.IMG_CDN as string) + imageSrc
}