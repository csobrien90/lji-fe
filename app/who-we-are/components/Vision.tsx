import translate from "@/app/hooks/translation"

const Vision = (): JSX.Element => {
	const { t } = translate()
	return (
		<section id="vision">
			<h2>{t("visionTitle")}</h2>
            <p>{t("vision")}</p>
		</section>
	)
}

export default Vision