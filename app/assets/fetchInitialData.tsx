import { LjiData } from '../types'
import { defaultLjiData } from './sample-data'

export const fetchInitialData = async (): Promise<LjiData> => {	
	// Fetch data from Sanity
	const query: string = encodeURIComponent('*[_type in ["blog", "event", "staff", "newsItem"]]')
	let data: Response
	let json: any
	try {
		data =  await fetch((process.env.API_URL as string) + query)
		json = await data.json()
	} catch (e) {
		console.log('Could not fetch required site data from Sanity')
		return defaultLjiData
	}
	
	// Sort data by _type
	const categories: LjiData = json.result.reduce((acc: any, item: any) => {
		const type: string = item._type
		if (!acc[type]) {
			acc[type] = []
		}
		acc[type].push(item)
		return acc
	}, {})

	return categories
}