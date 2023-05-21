import Activities from "../components/Activities"
import Media from "../components/Media"
import Blog from "../components/Blog"
import Reach from "../components/Reach"

const WhatWeDo = (props: any) => {
	console.log(props)
	return (
		<main>
			<h2>What We Do</h2>
			<Activities />
			<Reach />
			<Media />
			<Blog />
		</main>
	)
}

export default WhatWeDo