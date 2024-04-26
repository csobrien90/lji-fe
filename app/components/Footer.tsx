import NewsletterSignup from "./NewsletterSignup"
import SocialMediaLinks from "./SocialMediaLinks"
import Copyright from "./Copyright"

const Footer = () => {
	return (
		<footer id="footer">
			<NewsletterSignup />
			<SocialMediaLinks />
			<Copyright />
		</footer>
	)
}

export default Footer