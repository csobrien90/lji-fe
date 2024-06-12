import translate from "@/app/hooks/translation"
import Trans from "next-translate/Trans"

import styles from "../styles/History.module.css"

const History = () => {
	const { t } = translate()
	return (
		<section className={styles["history-section"]}>
			<h2>{t("historyTitle")}</h2>
			<Trans
				i18nKey="copy:history"
				components={[<p />]}
			/>
		</section>
	)
}

export default History