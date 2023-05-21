import { EventProps, Event } from "../types"

const Events = ({ limit, events }: EventProps) => {
	const filteredEvents: Event[] = events.sort((a: Event, b: Event): number => {
		return a.epoch - b.epoch
	}).filter((event: Event) => {
		return event.epoch + 360000 > Date.now()
	})

	return (
		<section id="events">
			<h3>Events</h3>
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
		</section>
	)
}

export default Events