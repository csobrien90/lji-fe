import Contact from "./components/Contact"
import Events from "../components/Events"
import Donate from "../components/Donate"

import { fetchInitialData } from "../assets/fetchInitialData"

import useTranslate from "../hooks/translation"

import styles from "./styles/GetInvolved.module.css"

export default async function GetInvolved() {
	const { t } = useTranslate()
	const { events } = await fetchInitialData()
	return (
		<>
			<main className={styles.main}>
				<h1>{t("getInvolvedLink")}</h1>
				<Contact />
				<Events events={events} />
				{/* <Donate form={'full'} /> */}
			</main>
		</>
	)
}