import Mission from './components/Mission'
import Events from './components/Events'
import News from './components/News'

import { fetchInitialData } from './assets/fetchInitialData'

export default async function Home() {
	const { events, newsItems } = await fetchInitialData()

	return (
		<main>
			<h1 className='sr-only'>Home</h1>
			<Mission layout='feature' />
			<Events limit={3} events={events} />
			<News newsItems={newsItems} />
		</main>
	)
}