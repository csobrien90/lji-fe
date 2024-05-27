import { SanityImage } from "../../types"

export const makeImageSrc = (imageObj: SanityImage, widthInPixels: number = 600): string => {
	// Build image src
	const srcArr = imageObj.asset._ref.split('-')
	let imageSrc = `${srcArr[1]}-${srcArr[2]}.${srcArr[3]}`

	// Add image query params
	imageSrc += `?w=${widthInPixels}`

	// Return image src
	return (process.env.NEXT_PUBLIC_IMG_CDN as string) + imageSrc
}