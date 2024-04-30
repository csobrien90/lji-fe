import { NewsItem, NewsProps } from "../types"
import Link from 'next/link'

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
			{newsItems.map((item: NewsItem, index: number) => (
				<article key={index}>
					<h3>{item.title}</h3>
					<p>{item.body}</p>
					{item.image && <img src={item.image} alt={item.imageAlt ?? ''} />}
					{item.link && <Link href={item.link}>{item.linkText ?? item.link}</Link>}
				</article>
			))}
		</section>
	)
}

export default News