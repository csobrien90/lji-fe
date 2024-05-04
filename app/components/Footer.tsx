import NewsletterSignup from "./NewsletterSignup"
import SocialMediaLinks from "./SocialMediaLinks"
import Copyright from "./Copyright"

import styles from "../assets/styles/Footer.module.css"

const Footer = () => {
	return (
		<footer className={styles.footer} id="footer">
			<NewsletterSignup />
			<SocialMediaLinks />
			<Copyright />
		</footer>
	)
}

export default Footer