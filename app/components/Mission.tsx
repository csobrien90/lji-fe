import { MissionProps } from "../types"
import translate from "@/app/hooks/translation"
import { fetchImage } from "../assets/fetchInitialData"
import { makeImageSrc } from "../assets/utils/sanityUtilities"
import defaultMissionImage from "@/app/assets/images/lji-promo1.jpeg"

import styles from "../assets/styles/Mission.module.css"

const Mission = async ({ layout }: MissionProps) => {
	const { t } = translate()

	// Fetch an image from Sanity
	let finalImageSrc, finalImageAlt
	const image = await fetchImage('marlin_black-history-month-2023')

	if (!image) {
		// If no image is found, use the default image
		finalImageSrc = defaultMissionImage.src
		finalImageAlt = ""
	} else {
		// If an image is found, make the Sanity image src
		finalImageSrc = makeImageSrc(image.image, 4000)
		finalImageAlt = image.imageAlt
	}

	return (
		<section className={styles[layout]} id={`mission-${layout}`}>
			{layout === "feature" && <img src={finalImageSrc} alt={finalImageAlt} />}
			<div className={styles["mission-card"]}>
				<h2>{t("missionTitle")}</h2>
				<p>{t("mission")}</p>
			</div>
		</section>
	)
}

export default Mission