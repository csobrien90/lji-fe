"use client"

import { useState } from "react"
import Notification from "./Notification"

import styles from "../assets/styles/NewsletterSignup.module.css"

import translate from "@/app/hooks/translation"
import TextInput from "./TextInput"
import Spinner from "./Spinner"

const NewsletterSignup = (): JSX.Element => {
	const { t } = translate()

	const [notification, setNotification] = useState({message: "", type: ""})
	const [isLoading, setIsLoading] = useState(false)

	const handleNewsletterSignup = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)
		const form = e.currentTarget

		// Validate form
		if (!form.checkValidity()) {
			form.reportValidity()
			setIsLoading(false)
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
					setNotification({message: t("newsletterFail"), type: 'warning'})
					return
				}

				// Reset form and show success message
				setNotification({message: t("newsletterSuccess"), type: 'success'})
				form.reset()
			} else throw new Error('Mailchimp API error')
		} catch (error) {
			// If there's an error with the Mailchimp API, show an error message
			setNotification({message: t("newsletterServerError"), type: 'error'})
		} finally {
			setIsLoading(false)

			// Reset notification after it disappears
			setTimeout(() => {
				setNotification({message: '', type: ''})
			}, 8000)
		}
	}
	
	return (
		<div className={styles.mcWrapper}>
			<form className={styles["mailchimp-newsletter-form"]} onSubmit={handleNewsletterSignup}>	
				<p>{t("newsletterCTA")}</p>
				<TextInput type="email" label={`${t("newsletterLabel")}`} slug={`${t("newsletterLabel")}`} required={true} />
				<input type="submit" value="Sign up" />
			</form>
			{isLoading && <Spinner />}
			<Notification
				message={notification.message}
				type={notification.type as "success"|"warning"|"error"|"info"}
			/>
		</div>
	)
}

export default NewsletterSignup