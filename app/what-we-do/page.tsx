import Activities from "./components/Activities"
import Reach from "./components/Reach"
import Blog from "./components/Blog"

import { fetchInitialData } from "../assets/fetchInitialData"

import useTranslate from "../hooks/translation"

import styles from "./styles/WhatWeDo.module.css"

export default async function WhatWeDo() {
	const { t } = useTranslate()
	const { blogPosts } = await fetchInitialData()
	return (
		<main className={styles["what-we-do"]}>
			<h1>{t("whatLink")}</h1>
			<Activities />
			<Reach />
			{blogPosts && blogPosts.length > 0 && <Blog blogPosts={blogPosts}/>}
		</main>
	)
}