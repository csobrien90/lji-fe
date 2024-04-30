import { MissionProps } from "../types"
import translate from "@/app/hooks/translation"

const Mission = ({ layout }: MissionProps) => {
	const { t } = translate()
	return (
		<section className={layout}>
			<h2>{t("missionTitle")}</h2>
			<p>{t("mission")}</p>
		</section>
	)
}

export default Mission