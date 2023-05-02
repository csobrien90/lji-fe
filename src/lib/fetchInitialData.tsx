import { LjiData } from '../types'
import {Buffer} from "buffer"

export const fetchInitialData = async (): Promise<LjiData> => {
	// Check if data is in sessionStorage
	const storedData = getLocalStorage()
	if (storedData) {
		return storedData
	}
	
	// Fetch data from Sanity
	const query = encodeURIComponent('*[_type in ["blog", "event", "staff", "newsItem"]]')
	const data = await fetch((process.env.API_URL as string) + query)

	// Sort data by _type
	const json = await data.json()
	const categories: LjiData = json.result.reduce((acc: any, item: any) => {
		const type = item._type
		if (!acc[type]) {
			acc[type] = []
		}
		acc[type].push(item)
		return acc
	}, {})

	setLocalStorage(categories)
	return categories
}

const setLocalStorage = (object: LjiData) => {
	const encodedObject = Buffer.from(JSON.stringify(object)).toString('base64')
	sessionStorage.setItem('lji-data', encodedObject)
}

const getLocalStorage = () => {
	const encodedObject = sessionStorage.getItem('lji-data')
	if (encodedObject) {
		const decodedObject = Buffer.from(encodedObject, 'base64').toString('utf-8')
		return JSON.parse(decodedObject)
	}
	return null
}