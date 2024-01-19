import EmailForm from "../components/EmailForm"

import NewsletterSignup from "@/app/components/NewsletterSignup"

const Contact = (): JSX.Element => {
	return (
		<section id="contact">
			<h2>Contact Us</h2>
			<EmailForm />
			<NewsletterSignup />
		</section>
	)
}

export default Contact