"use client"

import { useState } from 'react'
import { Event } from '../types'
import styles from '../assets/styles/SingleEvent.module.css'

const SingleEvent = ({ event }: { event: Event }) => {
	const [isOpen, setIsOpen] = useState(false)

	const descOpenClass = isOpen ? styles['open-desc'] : styles['closed-desc']
	const classes = `${styles.desc} ${descOpenClass}`

	const title = isOpen ? "Hide event description" : "Show event description"

	return (
		<li className={styles.event} onClick={() => setIsOpen(!isOpen)} title={title}>
			<div>
				<h3>{event.title}</h3>
				<p>{event.time}</p>
				<p>{event.venue} - {event.address}</p>
			</div>
			<p className={classes}>{event.desc}</p>
		</li>
	)
}

export default SingleEvent