import Activities from "./components/Activities"
import Reach from "./components/Reach"
import Blog from "./components/Blog"

import { fetchInitialData } from "../assets/fetchInitialData"

export default async function WhatWeDo() {
	const { blogPosts } = await fetchInitialData()
	return (
		<main>
			<h1>What We Do</h1>
			<Activities />
			<Reach />
			<Blog blogPosts={blogPosts}/>
		</main>
	)
}