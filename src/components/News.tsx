import { NewsItem, NewsProps } from "../types"
import { Link } from 'react-router-dom'

const News = ({ newsItems }: NewsProps): JSX.Element => {
	if (newsItems.length === 0) <></>
	if (newsItems.length > 2) newsItems.length = 2

	return (
		<section id="news">
			<h3>News</h3>
			{newsItems.map((item: NewsItem, index: number) => (
				<article key={index}>
					<h4>{item.title}</h4>
					<p>{item.body}</p>
					{item.image && <img src={item.image} alt={item.imageAlt ?? ''} />}
					{item.link && <Link to={item.link}>{item.linkText ?? item.link}</Link>}
				</article>
			))}
		</section>
	)
}

export default News