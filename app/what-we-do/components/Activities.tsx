import translate from "@/app/hooks/translation"

const Activities = (props: any) => {
	const { t } = translate()
	console.log(props)
	return (
		<h2>{t("activitiesTitle")}</h2>
	)
}

export default Activities