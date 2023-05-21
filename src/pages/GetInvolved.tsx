import Donate from "../components/Donate"
import Contact from "../components/Contact"
import SlackInfo from "../components/SlackInfo"
import Events from "../components/Events"
import { LjiData } from "../types"

const GetInvolved = ({ events }: LjiData) => {
	return (
		<main>
			<h2>Get Involved</h2>
			<Contact />
			<Events limit={null} events	={events} />
			<Donate form={'full'} />
			<SlackInfo />
		</main>
	)
}

export default GetInvolved