import EmailForm from "../components/EmailForm"

import translate from "@/app/hooks/translation"

const Contact = (): JSX.Element => {
	const { t } = translate()
	return (
		<section>
			<h2>{t("contactUs")}</h2>
			<EmailForm />
		</section>
	)
}

export default Contact