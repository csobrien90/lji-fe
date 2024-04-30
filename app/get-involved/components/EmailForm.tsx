"use client"

import { FormEvent, useState } from "react"
import Notification from "../../components/Notification"

import styles from "../styles/EmailForm.module.css"

import translate from "@/app/hooks/translation"
import TextInput from "@/app/components/TextInput"
import Spinner from "@/app/components/Spinner"

const EmailForm = (): JSX.Element => {
	const { t } = translate()
	const [notification, setNotification] = useState({message: "", type: ""})
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()

		if (!e.currentTarget.checkValidity()) {
			e.currentTarget.reportValidity()
			return
		}

		setIsLoading(true)

		setTimeout(() => {
			setIsLoading(false)
			setNotification({message: "Contact form not implemented yet.", type: "warning"})
		}, 5000)

		setTimeout(() => {
			setNotification({message: "", type: ""})
		}, 8000)
	}

	return (
		<form className={styles["email-us"]} onSubmit={handleSubmit} >
			<div className={styles["form-wrapper"]}>
				<p>{t("contactCTA")}</p>
				<TextInput type="text" label={t("nameLabel")} slug={t("nameLabel")} required={true} />
				<TextInput type="email" label={t("emailLabel")} slug={t("emailLabel")} required={true} />
				<TextInput type="textarea" label={t("messageLabel")} slug={t("messageLabel")} required={true} />
				<div className="g-recaptcha" data-sitekey="6Le7P7kdAAAAAOy6clVAp-tU2czk9WOwaeFmYDrj"></div>
				<input type="submit" name={t("sendMessage")} id="email-us-submit" />
			</div>
			<Notification
				message={notification.message}
				type={notification.type as "success"|"warning"|"error"|"info"}
			/>
			{isLoading && <Spinner />}
		</form>
	)
}

export default EmailForm