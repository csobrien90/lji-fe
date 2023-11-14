import Activities from "./components/Activities"
import Reach from "./components/Reach"
import Media from "./components/Media"
import Blog from "./components/Blog"

import { defaultLjiData } from "../assets/sample-data"

export default function WhatWeDo() {
	const { blogPosts } = defaultLjiData
	return (
		<main>
			<h1>What We Do</h1>
			<Activities />
			<Reach />
			<Media />
			<Blog blogPosts={blogPosts}/>
		</main>
	)
}