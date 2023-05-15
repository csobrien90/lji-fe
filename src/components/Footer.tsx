import Copyright from "./Copyright"
import NewsletterSignup from "./NewsletterSignup"
import SocialMediaLinks from "./SocialMediaLinks"

const Footer = () => {
	return (
		<footer>
			<NewsletterSignup />
			<SocialMediaLinks />
			<Copyright />
		</footer>
	)
}

export default Footer