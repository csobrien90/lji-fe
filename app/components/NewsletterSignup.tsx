"use client"

const NewsletterSignup = (): JSX.Element => {

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
				console.log({data})				
				console.log('Thank you for signing up for the newsletter!')
				form.reset()
			} else {
				console.error({response})
				console.log('There was an error signing up for the newsletter. Please try again.')
			}
		} catch (error) {
			console.error({error})
			console.log('There was an error signing up for the newsletter. Please try again.')
		}		
	}
	
	return (
		<form id="mailchimp-newsletter-form" onSubmit={handleNewsletterSignup}>
			<label htmlFor="email">Email</label>
			<input type="email" name="email" id="email" required />
			<input type="submit" value="Sign up" />
		</form>
	)
}

export default NewsletterSignup