import { EventProps, Event } from "../types"
import { isInTheFuture } from "../assets/utils/time"
import Link from 'next/link'

import useTranslate from "@/app/hooks/translation"

import styles from "../assets/styles/Events.module.css"
import Card from "./Card"

const Events = ({ limit = null, events, showPrivateEvents = false }: EventProps) => {
	const { t } = useTranslate()

	const filteredEvents: Event[] = events.sort((a: Event, b: Event): number => {
		return a.epoch - b.epoch
	}).filter((event: Event, index: number) => {
		// If showPrivateEvents is false, only show public events
		const isAllowed = showPrivateEvents ? true : event.isPublic

		// Only show events that are in the future
		const isFuture = isInTheFuture(event.epoch)

		return isAllowed && isFuture
	}).slice(0, limit || events.length) // Limit the number of events shown

	if (!filteredEvents || filteredEvents.length === 0) return (
		<section className={styles.events}>
			<h2>{t("eventsTitle")}</h2>
			<p>{t("noEvents")}</p>
		</section>
	)

	return (
		<section className={styles.events}>
			<h2>{t("eventsTitle")}</h2>
			<ul className="card-list">
				{filteredEvents.map((event: Event, index: number) => {
					return (
						<Card 
							key={index}
							header={<EventHeader event={event} />}
							expandingContent={<EventDescription desc={event?.desc} />}
						/>
					)
				})}
			</ul>
			{limit && filteredEvents.length > limit && <Link href="/get-involved">{t("seeAllEvents")}</Link>}
		</section>
	)
}

const EventDescription = ({desc}: {desc: string | undefined}): JSX.Element | null => {
	if (!desc) return null
	return <p>{desc}</p>
}

const EventHeader = ({event}: {event: Event}): JSX.Element => {
	return (
		<>
			<h3>{event.title}</h3>
			<p>{event.time}</p>
			<p>{event.venue} - {event.address}</p>
		</>
	)
}

export default Events