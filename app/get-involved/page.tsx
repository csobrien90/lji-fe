import Contact from "./components/Contact"
import Events from "../components/Events"
import Donate from "../components/Donate"
import SlackInfo from "./components/SlackInfo"

import { defaultLjiData } from "../assets/sample-data"

export default function GetInvolved() {
	const { events } = defaultLjiData
	return (
		<main>
			<h1>Get Involved</h1>
			<Contact />
			<Events limit={null} events	={events} />
			<Donate form={'full'} />
			<SlackInfo />
		</main>
	)
}