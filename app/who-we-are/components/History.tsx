import translate from "@/app/hooks/translation"

const History = () => {
	const { t } = translate()

	return (
		<section>
			<h2>{t("historyTitle")}</h2>
			<p>{t("history")}</p>
		</section>
	)
}

export default History