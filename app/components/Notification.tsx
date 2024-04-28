"use client"

import { useState, useEffect } from "react"
import { NotificationProps } from "../types"

import styles from "../assets/styles/Notification.module.css"

const Notification = ({message, type}: NotificationProps) => {
	// Validate props
	if (!message || !type || !["success", "warning", "error", "info"].includes(type)) return null
	
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		setVisible(true)
		const timer = setTimeout(() => {
			setVisible(false)
		}, 5000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={
		  `${styles.notification} ${styles[type]} ${visible ? "" : styles.hidden}`
		}>
			{message}
		</div>
	)
}

export default Notification