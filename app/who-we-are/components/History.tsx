import useTranslate from "@/app/hooks/translation"
import Trans from "next-translate/Trans"

import styles from "../styles/History.module.css"

const History = () => {
	const { t } = useTranslate()
	return (
		<section className={styles["history-section"]}>
			<h2>{t("historyTitle")}</h2>
			<Trans
				i18nKey="copy:history"
				components={[<p key={Math.random().toString()} />]}
			/>
		</section>
	)
}

export default History