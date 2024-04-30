import Activities from "./components/Activities"
import Reach from "./components/Reach"
import Blog from "./components/Blog"

import { fetchInitialData } from "../assets/fetchInitialData"

import translate from "../hooks/translation"

export default async function WhatWeDo() {
	const { t } = translate()
	const { blogPosts } = await fetchInitialData()
	return (
		<main>
			<h1>{t("whatLink")}</h1>
			<Activities />
			<Reach />
			{blogPosts && blogPosts.length > 0 && <Blog blogPosts={blogPosts}/>}
		</main>
	)
}