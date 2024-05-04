import { ReCaptchaProvider } from "next-recaptcha-v3";

import EmailForm from "../components/EmailForm"

import translate from "@/app/hooks/translation"

const Contact = (): JSX.Element => {
	const { t } = translate()
	return (
		<ReCaptchaProvider>
			<section>
				<h2>{t("contactUs")}</h2>
				<EmailForm />
			</section>
		</ReCaptchaProvider>
	)
}

export default Contact