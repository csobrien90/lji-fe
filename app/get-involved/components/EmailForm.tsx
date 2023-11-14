import { FormEvent } from "react"

const EmailForm = (): JSX.Element => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		console.log(e)
	}

	return (
		<form id="email-us" onSubmit={handleSubmit} >
			<p>Send us an email - we'd love to hear from you!</p>
			<span className="form-line">
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" />
			</span>
			<span className="form-line">
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" />
			</span>
			<span className="form-line">
				<label htmlFor="message">Message:</label>
				<textarea id="message" name="message" />
			</span>
			<div className="g-recaptcha" data-sitekey="6Le7P7kdAAAAAOy6clVAp-tU2czk9WOwaeFmYDrj"></div>
			<input type="submit" name="submit" id="email-us-submit" />
		</form>
	)
}

export default EmailForm