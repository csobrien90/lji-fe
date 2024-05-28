import translate from "@/app/hooks/translation"

const Activities = (props: any) => {
	const { t } = translate()
	console.log(props)
	return (
		<section>
			<h2>{t("activitiesTitle")}</h2>
			<article>
				<h3>Education</h3>
				<p>Blurb about jam sessions, workshops, etc.</p>
				{/* 
					outdoor-jam_lccc-2021
					trip-j_monarch-jam-2023
					monarch-jam-2023
					dave-and-jailynn_elev8-arts-day-2023
				*/}
			</article>
			<article>
				<h3>Performance</h3>
				<p>Blurb about playing, commissioning works, etc.</p>
				{/* 
					full-band_portland-library-2021
					full-band_russell-resource-community-event-2021
					dave_ken-clay-event-2023
				*/}
			</article>
			<article>
				<h3>Community</h3>
				<p>Blurb about community building efforts, engagement, etc.</p>
				{/* 
					community-engagement_st-james-performance-village-2024
					roundtable-discussion_revitalize-louisville-jam-2022
					dave-and-ken_ken-clay-event-2023
				*/}
			</article>
		</section>
	)
}

export default Activities