import EmailForm from "../components/EmailForm"
import NewsletterSignup from "../components/NewsletterSignup"
import VolunteerSignup from "../components/VolunteerSignup"

const Contact = (props: any) => {
	console.log(props)
	return (
		<section id="contact">
			<h3>Contact Us</h3>
			<EmailForm />
			<NewsletterSignup />
			<VolunteerSignup />
		</section>
	)
}

export default Contact