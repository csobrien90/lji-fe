import Contact from "./components/Contact"
import Events from "../components/Events"
import Donate from "../components/Donate"

import { fetchInitialData } from "../assets/fetchInitialData"

import translate from "../hooks/translation"

export default async function GetInvolved() {
	const { t } = translate()
	const { events } = await fetchInitialData()
	return (
		<main>
			<h1>{t("getInvolvedLink")}</h1>
			<Events events={events} />
			{/* <Donate form={'full'} /> */}
			<Contact />
		</main>
	)
}