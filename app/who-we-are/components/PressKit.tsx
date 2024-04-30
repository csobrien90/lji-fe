import translate from "@/app/hooks/translation"

const PressKit = (): JSX.Element => {
	const { t } = translate()
	return (
		<section>
			<h2>{t("pressKitTitle")}</h2>
			<p>{t("pressKit")}</p>
			<a href="/press-kit.zip">{t("pressKitLink")}</a>
		</section>
	)
}

export default PressKit