"use client"

import { MouseEvent, useState } from 'react'
import styles from '../assets/styles/Card.module.css'

const Card = ({ header, expandingContent }: { header: JSX.Element, expandingContent?: JSX.Element }) => {
	const [isOpen, setIsOpen] = useState(false)

	const descOpenClass = isOpen ? styles['open-desc'] : styles['closed-desc']
	const classes = `${styles.desc} ${descOpenClass}`

	const title = isOpen ? "Hide event description" : "Show event description"

	const toggleDesc = (e: MouseEvent) => {
		if (e.target instanceof HTMLAnchorElement) return
		setIsOpen(!isOpen)
	}

	return (
		<li className={styles.card} onClick={toggleDesc} title={title}>
			<header>
				{header}
			</header>
			{expandingContent && <div className={classes}>{expandingContent}</div>}
		</li>
	)
}

export default Card