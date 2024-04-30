import { Fragment } from 'react'
import Link from 'next/link'

import translate from '@/app/hooks/translation'

export default async function ResourceLinks({ user }: { user: any }) {
	const { t } = translate()
	const resources = []

	// If the user is an admin, show a link to the CMS
	const adminEmails = [
		'louisvillejazzinitiative@gmail.com',
		'obrien.music@gmail.com',
		'kianadelmusic@gmail.com'
	]

	const cmsUrl = "https://louisville-jazz-initiative.sanity.studio/"
	if (adminEmails.includes(user.email))
		resources.push(<Link href={cmsUrl}>{t("cmsLinkText")}</Link>)
	
	return (
		<section>
			<h2>{t("resourceLinksTitle")}</h2>
			<nav>
				{resources.map((resource, index) => (
					<Fragment key={index}>
						{resource}
					</Fragment>
				))}
			</nav>
		</section>
	)
}