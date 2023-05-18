import Mission from "../components/Mission"
import Events from "../components/Events"
import News from "../components/News"

const Home = () => {
  return (
	<main>
		<h2>Home</h2>
		<Mission layout='feature' />
		<Events limit={1} />
		<News />
	</main>
  )
}

export default Home