import Mission from "../components/Mission"
import Events from "../components/Events"
import News from "../components/News"
import { LjiData } from "../types"

const Home = ({ events, newsItems }: LjiData) => {
  return (
	<main>
		<h2>Home</h2>
		<Mission layout='feature' />
		<Events limit={1} events={events} />
		<News newsItems={newsItems} />
	</main>
  )
}

export default Home