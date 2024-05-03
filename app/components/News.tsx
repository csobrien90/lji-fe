import { NewsItem, NewsProps } from "../types"
import Link from 'next/link'
import { makeImageSrc } from "../assets/utils/sanityUtilities"

import translate from "@/app/hooks/translation"

const News = ({ newsItems }: NewsProps): JSX.Element => {
	const { t } = translate()

	if (!newsItems || newsItems.length === 0) return (
		<section id="news">
			<h2>{t("newsTitle")}</h2>
			<p>{t("noNews")}</p>
		</section>
	)
	if (newsItems.length > 2) newsItems.length = 2

	return (
		<section id="news">
			<h2>{t("newsTitle")}</h2>
			{newsItems.map((item: NewsItem, index: number) => {
				return (
					<article key={index}>
						<h3>{item.title}</h3>
						<p>{item.body}</p>
						{item.image && <img src={makeImageSrc(item.image)} alt={item.imageAlt ?? ''} />}
						{item.link && <Link href={item.link}>{item.linkText ?? item.link}</Link>}
					</article>
				)
			})}
		</section>
	)
}

export default News