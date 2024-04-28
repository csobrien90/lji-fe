import { EventProps, Event } from "../types"
import Link from 'next/link'

const Events = ({ limit = null, events, showPrivateEvents = false }: EventProps) => {
	if (!events || events.length === 0) return (
		<section id="events">
			<h2>Events</h2>
			<p>There are no events scheduled at this time.</p>
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
			<h2>Events</h2>
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
			{limit && filteredEvents.length > limit && <Link href="/get-involved">See All Events</Link>}
		</section>
	)
}

export default Events