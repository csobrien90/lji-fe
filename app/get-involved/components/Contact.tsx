import { ReCaptchaProvider } from "next-recaptcha-v3";
import EmailForm from "../components/EmailForm"
import useTranslate from "@/app/hooks/translation"
import styles from "../styles/Contact.module.css"

const Contact = (): JSX.Element => {
	const { t } = useTranslate()
	return (
		<ReCaptchaProvider>
			<section className={styles.contact}>
				<h2>{t("contactUs")}</h2>
				<EmailForm />
			</section>
		</ReCaptchaProvider>
	)
}

export default Contact