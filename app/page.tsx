import Mission from './components/Mission'
import Events from './components/Events'
import News from './components/News'

import { defaultLjiData } from './assets/sample-data'

export default function Home() {
	const { events, newsItems } = defaultLjiData

	return (
		<main>
			<h1>Home</h1>
			<Mission layout='feature' />
			<Events limit={1} events={events} />
			<News newsItems={newsItems} />
		</main>
	)
}