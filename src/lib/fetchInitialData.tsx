import { LjiData } from '../types'
import { Buffer } from "buffer"

export const fetchInitialData = async (): Promise<LjiData> => {
	// Check if data is in sessionStorage
	const storedData: LjiData | null = getSessionStorage()
	if (storedData) {
		return storedData
	}
	
	// Fetch data from Sanity
	const query: string = encodeURIComponent('*[_type in ["blog", "event", "staff", "newsItem"]]')
	let data: Response
	try {
		data =  await fetch((process.env.API_URL as string) + query)
	} catch (e) {
		throw new Error('Could not fetch required site data from Sanity')
	}

	// Sort data by _type
	const json: any = await data.json()
	const categories: LjiData = json.result.reduce((acc: any, item: any) => {
		const type: string = item._type
		if (!acc[type]) {
			acc[type] = []
		}
		acc[type].push(item)
		return acc
	}, {})

	setSessionStorage(categories)
	return categories
}

const setSessionStorage = (object: LjiData): void => {
	const encodedObject: string = Buffer.from(JSON.stringify(object)).toString('base64')
	sessionStorage.setItem('lji-data', encodedObject)
}

const getSessionStorage = (): LjiData | null => {
	const encodedObject: string | null = sessionStorage.getItem('lji-data')
	if (encodedObject) {
		const decodedObject: string = Buffer.from(encodedObject, 'base64').toString('utf-8')
		return JSON.parse(decodedObject)
	}
	return null
}