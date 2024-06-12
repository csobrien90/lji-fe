import useTranslate from "@/app/hooks/translation"
import styles from "../styles/Reach.module.css"

const Reach = () => {
	const { t } = useTranslate()
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