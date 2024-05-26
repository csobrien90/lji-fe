import translate from "@/app/hooks/translation"
import Link from "next/link"

const PressKit = (): JSX.Element => {
	const { t } = translate()
	return (
		<section>
			<h2>{t("pressKitTitle")}</h2>
			<p>{t("pressKit")}</p>
			<Link href="/press-kit.zip">{t("pressKitLink")}</Link>
		</section>
	)
}

export default PressKit