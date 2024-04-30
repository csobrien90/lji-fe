"use client"

import { FormEvent, useState } from "react"
import Notification from "../../components/Notification"

import styles from "../styles/EmailForm.module.css"

import translate from "@/app/hooks/translation"

const EmailForm = (): JSX.Element => {
	const { t } = translate()
	const [notification, setNotification] = useState({message: "", type: ""})

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		
		setNotification({message: "Contact form not implemented yet.", type: "warning"})

		setTimeout(() => {
			setNotification({message: "", type: ""})
		}, 8000)
	}

	return (
		<form className={styles["email-us"]} onSubmit={handleSubmit} >
			<p>{t("contactCTA")}</p>
			<span className="form-line">
				<label htmlFor="name">{t("nameLabel")}</label>
				<input type="text" id="name" name="name" />
			</span>
			<span className="form-line">
				<label htmlFor="email">{t("emailLabel")}</label>
				<input type="email" id="email" name="email" />
			</span>
			<span className="form-line">
				<label htmlFor="message">{t("messageLabel")}</label>
				<textarea id="message" name="message" />
			</span>
			<div className="g-recaptcha" data-sitekey="6Le7P7kdAAAAAOy6clVAp-tU2czk9WOwaeFmYDrj"></div>
			<input type="submit" name={t("sendMessage")} id="email-us-submit" />
			<Notification
				message={notification.message}
				type={notification.type as "success"|"warning"|"error"|"info"}
			/>
		</form>
	)
}

export default EmailForm