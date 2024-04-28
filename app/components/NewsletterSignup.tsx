"use client"

import { useState } from "react"
import Notification from "./Notification"

import styles from "../assets/styles/NewsletterSignup.module.css"

const NewsletterSignup = (): JSX.Element => {
	const [notification, setNotification] = useState({message: "", type: ""})

	const handleNewsletterSignup = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget

		// Validate form
		if (!form.checkValidity()) {
			form.reportValidity()
			return
		}

		// Get form data
		const formData = new FormData(e.currentTarget)
		const email = formData.get('email') as string
		
		try {
			const response = await fetch('/api/mc', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			})

			if (response.ok && response.status === 200) {
				const data = await response.json()

				// If Mailchimp API returns a 200 status code, the email was successfully added
				if (data.status !== 200) {
					setNotification({message: 'Subscription failed. Refresh to try again or contact us for assistance.', type: 'warning'})
					return
				}

				setNotification({message: 'Thank you for signing up for the newsletter!', type: 'success'})
				form.reset()
			} else throw new Error('Mailchimp API error')
		} catch (error) {
			setNotification({message: 'A server error occured. Please refresh and try again.', type: 'error'})
		} finally {
			// Reset notification after it disappears
			setTimeout(() => {
				setNotification({message: '', type: ''})
			}, 8000)
		}
	}
	
	return (
		<form className={styles["mailchimp-newsletter-form"]} onSubmit={handleNewsletterSignup}>
			<p>Join the LJI mailing list to stay up to date!</p>
			<label htmlFor="email">
				Email:
				<input type="email" name="email" id="email" required />
			</label>
			<input type="submit" value="Sign up" />
			<Notification
				message={notification.message}
				type={notification.type as "success"|"warning"|"error"|"info"}
			/>
		</form>
	)
}

export default NewsletterSignup