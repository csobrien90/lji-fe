import translate from "@/app/hooks/translation"
import styles from "../styles/Reach.module.css"

const Reach = () => {
	const { t } = translate()
  return (
		<section className={styles.reach}>
			<h2>{t("reachTitle")}</h2>
			<p>{t("reachCopy")}</p>
			{/*
				[#] Total audience
				[#] Community events with [#] partnering organizations
				[#] students in [#] schools and community centers
			*/}
		</section>
  )
}

export default Reach