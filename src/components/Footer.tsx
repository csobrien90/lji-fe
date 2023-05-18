import FooterLinks from "./FooterLinks"
import NewsletterSignup from "./NewsletterSignup"
import SocialMediaLinks from "./SocialMediaLinks"
import Copyright from "./Copyright"

const Footer = () => {
	return (
		<footer>
			<FooterLinks />
			<NewsletterSignup />
			<SocialMediaLinks />
			<Copyright />
		</footer>
	)
}

export default Footer