import Link from 'next/link'
import styles from "../assets/styles/Navigation.module.css"
import translate from '../hooks/translation'

const Navigation = () => {
	const { t } = translate()
	return (
		<nav className={styles["main-nav"]}>
			<Link href={'/who-we-are'}>{t("whoLink")}</Link>
			<Link href={'/what-we-do'}>{t("whatLink")}</Link>
			<Link href={'/get-involved'}>{t("getInvolvedLink")}</Link>
			<Link href={'/artist-resources'}>{t("artistResourcesLink")}</Link>
			<Link href={'/code-of-conduct'}>{t("codeOfConductLink")}</Link>
			{/* <DonateButton /> */}
		</nav>
	)
}

export default Navigation