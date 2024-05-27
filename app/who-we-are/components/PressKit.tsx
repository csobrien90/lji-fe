import translate from "@/app/hooks/translation"
import Link from "next/link"

const PressKit = (): JSX.Element | null => {
	// const pressKitFile = "/press-kit.zip"
	const pressKitFile = null
	if (!pressKitFile) return null

	const { t } = translate()
	return (
		<section>
			<h2>{t("pressKitTitle")}</h2>
			<p>{t("pressKit")}</p>
			<Link href={pressKitFile}>{t("pressKitLink")}</Link>
		</section>
	)
}

export default PressKit