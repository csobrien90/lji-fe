import { LjiData } from '../types'
import { defaultLjiData } from './sample-data'

export const fetchInitialData = async (): Promise<LjiData> => {	
	// Fetch data from Sanity
	const query: string = encodeURIComponent('*[_type in ["blog", "event", "staff", "newsItem", "grant"]]')
	let data: Response
	let json: any
	try {
		data =  await fetch((process.env.API_URL as string) + query, {
			cache: 'no-cache',
		})
		json = await data.json()
	} catch (e) {
		console.error('Could not fetch required site data from Sanity')
		return defaultLjiData
	}
	
	// Sort data by _type
	const categories: LjiData = json.result.reduce((acc: any, item: any) => {
		let type: string = item._type

		if (type === 'event') type = 'events'
		if (type === 'newsItem') type = 'newsItems'
		if (type === 'grant') type = 'grants'

		if (!acc[type]) {
			acc[type] = []
		}
		acc[type].push(item)
		return acc
	}, {})

	return categories
}