import Contact from "./components/Contact"
import Events from "../components/Events"
import Donate from "../components/Donate"
import SlackInfo from "../artist-resources/components/SlackInfo"

import { fetchInitialData } from "../assets/fetchInitialData"

export default async function GetInvolved() {
	const { events } = await fetchInitialData()
	return (
		<main>
			<h1>Get Involved</h1>
			<Contact />
			<Events limit={null} events	={events} />
			<Donate form={'full'} />
		</main>
	)
}