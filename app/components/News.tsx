import { NewsItem, NewsProps } from "../types"
import Link from 'next/link'
import { makeImageSrc } from "../assets/utils/sanityUtilities"
import { getPexelsImage } from "../assets/utils/pexelsUtilities"

import useTranslate from "@/app/hooks/translation"

import styles from "../assets/styles/News.module.css"

const News = ({ newsItems }: NewsProps): JSX.Element => {
	const { t } = useTranslate()

	if (!newsItems || newsItems.length === 0) return (
		<section id="news">
			<h2>{t("newsTitle")}</h2>
			<p>{t("noNews")}</p>
		</section>
	)

	// Sort the news items by date
	newsItems.sort((a, b) => {
		const dateA = new Date(a._updatedAt).getTime()
		const dateB = new Date(b._updatedAt).getTime()
		return dateB - dateA
	})
	if (newsItems.length > 2) newsItems.length = 2

	// PEXELS_API_KEY
	return (
		<section className={styles["news-section"]}>
			<h2>{t("newsTitle")}</h2>
			{newsItems.map(async (item: NewsItem, index: number) => {
				let imageSrc
				let imageAlt = item.imageAlt ?? ''
				if (item.image) {
					imageSrc = makeImageSrc(item.image)
				} else {
					const {src, alt} = await getPexelsImage("Jazz music")
					imageSrc = src
					imageAlt = alt
				}

				return (
					<article key={index}>
						<img src={imageSrc} alt={imageAlt} />
						<div>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
							{item.link && <Link href={item.link}>{item.linkText ?? item.link}</Link>}
						</div>
					</article>
				)
			})}
		</section>
	)
}

export default News