import { useState } from "react"

import EmailForm from "../components/EmailForm"
import NewsletterSignup from "../components/NewsletterSignup"
import VolunteerSignup from "../components/VolunteerSignup"

import { formTitles } from "../types"

const Contact = (): JSX.Element => {
	const [currentForm, setCurrentForm] = useState<keyof typeof formTitles>('email')

	const handleFormSelect = (e: React.MouseEvent, toSelect: keyof typeof formTitles) => {
		const thisButton = e.target as HTMLButtonElement
		thisButton.parentElement?.querySelectorAll('button').forEach(button => button.classList.remove('active'))
		thisButton.classList.add('active')
		setCurrentForm(toSelect)
	}

	return (
		<section id="contact">
			<h3>Contact Us</h3>
			<nav>
				<button id="select-email" onClick={(e) => handleFormSelect(e, 'email')}>Email us</button>
				<button id="select-newsletter" onClick={(e) => handleFormSelect(e, 'newsletter')}>Sign up for our newsletter</button>
				<button id="select-volunteer" onClick={(e) => handleFormSelect(e, 'volunteer')}>Volunteer with us</button>
			</nav>
			{currentForm === 'email' && <EmailForm />}
			{currentForm === 'newsletter' && <NewsletterSignup />}
			{currentForm === 'volunteer' && <VolunteerSignup />}
		</section>
	)
}

export default Contact