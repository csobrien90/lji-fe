import Activities from "../components/Activities"
import Media from "../components/Media"
import Blog from "../components/Blog"
import Reach from "../components/Reach"
import { LjiData } from "../types"

const WhatWeDo = ({ blogPosts }:LjiData) => {
	return (
		<main>
			<h2>What We Do</h2>
			<Activities />
			<Reach />
			<Media />
			<Blog blogPosts={blogPosts}/>
		</main>
	)
}

export default WhatWeDo