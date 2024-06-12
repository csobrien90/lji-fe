import useTranslate from "@/app/hooks/translation"

const Vision = (): JSX.Element => {
	const { t } = useTranslate()
	return (
		<section>
			<h2>{t("visionTitle")}</h2>
            <p>{t("vision")}</p>
		</section>
	)
}

export default Vision