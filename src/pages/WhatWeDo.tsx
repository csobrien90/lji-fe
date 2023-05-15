import Activities from "../components/Activities"
import Media from "../components/Media"
import Blog from "../components/Blog"

const WhatWeDo = (props: any) => {
	console.log(props)
	return (
		<main>
			<h2>What We Do</h2>
			<Activities />
			<Media />
			<Blog />
		</main>
	)
}

export default WhatWeDo