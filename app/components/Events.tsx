import { EventProps, Event } from "../types"
import Link from 'next/link'

import translate from "@/app/hooks/translation"

const Events = ({ limit = null, events, showPrivateEvents = false }: EventProps) => {
	const { t } = translate()

	if (!events || events.length === 0) return (
		<section id="events">
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
		const isFuture = event.epoch + 360000 > Date.now()

		return isAllowed && isFuture
	})

	return (
		<section id="events">
			<h2>{t("eventsTitle")}</h2>
			<ul>
				{filteredEvents.map((event: Event, index: number) => {
					if (limit && limit <= index) return
					return (
						<li key={index}>
							<h4>{event.title}</h4>
							<p>{event.time}</p>
							<p>{event.venue} - {event.address}</p>
							<p>{event.desc}</p>
						</li>
					)
				})}
			</ul>
			{limit && filteredEvents.length > limit && <Link href="/get-involved">{t("seeAllEvents")}</Link>}
		</section>
	)
}

export default Events