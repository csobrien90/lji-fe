"use client"
import { FormEvent, useState, useCallback } from "react"
import { useReCaptcha } from "next-recaptcha-v3";
import Notification from "../../components/Notification"

import styles from "../styles/EmailForm.module.css"

import translate from "@/app/hooks/translation"
import TextInput from "@/app/components/TextInput"
import Spinner from "@/app/components/Spinner"

interface LambdaPayload {
	name: string
	email: string
	message: string
	token?: string
	subject?: string
}

const EmailForm = (): JSX.Element => {
	const { executeRecaptcha } = useReCaptcha();
	const { t } = translate()
	const [notification, setNotification] = useState({message: "", type: ""})
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault()

		if (!e.currentTarget.checkValidity()) {
			e.currentTarget.reportValidity()
			return
		}

		setIsLoading(true)

		await submitForm(e.currentTarget)

		setIsLoading(false)
	}

	const submitForm = useCallback(
		async (form: HTMLFormElement): Promise<void> => {
			const lambdaUrl = 'https://sz2wtf6qexzt4vgukimw2kx5xe0pzoep.lambda-url.us-east-2.on.aws/'
			
			const payload = Array.from(form.children[0].children)
				.filter(child => child.tagName === "LABEL")
				.reduce((acc, label) => {
					const input = label.children[1] as HTMLInputElement
					const name = input.id.toLowerCase() as keyof LambdaPayload
					acc[name] = input.value
					return acc
				}, {} as LambdaPayload)

			payload.token = await executeRecaptcha("submit")
			payload.subject = "New message from LJI Contact Form"

			try {
				const lambdaResponse = await fetch(lambdaUrl, {
					method: "POST",
					body: JSON.stringify(payload)
				})
		
				const response = await lambdaResponse.json()
		
				if (response.status === 200) {
					if (response.message.includes("Your message has been sent")) {
						setTempNotification({message: response.message, type: "success"})
						form.reset()
					} else {
						setTempNotification({message: response.message, type: "warning"})
					}
				} else throw new Error(response.body)
			} catch (error) {
				console.error(error)
				setTempNotification({message: t("contactFormError"), type: "error"})
			}
		}, [executeRecaptcha]
	)

	const setTempNotification = ({message, type}: {message: string, type: "success"|"warning"|"error"|"info"}): void => {
		setNotification({message, type})
		setTimeout(() => setNotification({message: "", type: ""}), 6000)
	}

	return (
		<form className={styles["email-us"]} onSubmit={handleSubmit} >
			<div className={styles["form-wrapper"]}>
				<p>{t("contactCTA")}</p>
				<TextInput type="text" label={t("nameLabel")} slug={t("nameLabel")} required={true} />
				<TextInput type="email" label={t("emailLabel")} slug={t("emailLabel")} required={true} />
				<TextInput type="textarea" label={t("messageLabel")} slug={t("messageLabel")} required={true} />
				<input type="submit" value={t("sendMessage")} />
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