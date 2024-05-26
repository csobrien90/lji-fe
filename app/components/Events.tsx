import { EventProps, Event } from "../types"
import { isInTheFuture } from "../assets/utils/time"
import Link from 'next/link'

import translate from "@/app/hooks/translation"

import styles from "../assets/styles/Events.module.css"

const Events = ({ limit = null, events, showPrivateEvents = false }: EventProps) => {
	const { t } = translate()

	if (!events || events.length === 0) return (
		<section className={styles.events}>
			<h2>{t("eventsTitle")}</h2>
			<p>{t("noEvents")}</p>
		</section>
	)

	const filteredEvents: Event[] = events.sort((a: Event, b: Event): number => {
		return a.epoch - b.epoch
	}).filter((event: Event) => {
		// If showPrivateEvents is false, only show public events
		const isAllowed = showPrivateEvents ? true : event.isPublic

		// Only show events that are in the future
		const isFuture = isInTheFuture(event.epoch)

		return isAllowed && isFuture
	})

	return (
		<section className={styles.events}>
			<h2>{t("eventsTitle")}</h2>
			<ul>
				{filteredEvents.map((event: Event, index: number) => {
					if (limit && limit <= index) return
					return <Event key={index} event={event} />
				})}
			</ul>
			{limit && filteredEvents.length > limit && <Link href="/get-involved">{t("seeAllEvents")}</Link>}
		</section>
	)
}

const Event = ({ event }: { event: Event }) => {
	return (
		<li>
			<h3>{event.title}</h3>
			<p>{event.time}</p>
			<p>{event.venue} - {event.address}</p>
			<p>{event.desc}</p>
		</li>
	)
}

export default Events