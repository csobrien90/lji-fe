"use client"

import { useState, useEffect } from "react"
import { NotificationProps } from "../types"

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
		<div className={`notification ${type} ${visible ? "" : "hidden"}`}>
			{message}
		</div>
	)
}

export default Notification