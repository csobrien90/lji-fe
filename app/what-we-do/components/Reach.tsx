import translate from "@/app/hooks/translation"

const Reach = () => {
	const { t } = translate()
  return (
		<section id="reach">
			<h2>{t("reachTitle")}</h2>
		</section>
  )
}

export default Reach