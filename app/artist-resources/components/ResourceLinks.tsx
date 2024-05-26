import { Fragment } from 'react'
import Link from 'next/link'

import translate from '@/app/hooks/translation'
import { Permission } from '../accounts'

export default async function ResourceLinks({ user, roles }: { user: any, roles: Permission[] }) {
	const { t } = translate()
	const resources = []

	// Add a link to the CMS if the user is an admin
	const cmsUrl = "https://louisville-jazz-initiative.sanity.studio/"
	if (roles.includes("admin"))
		resources.push(<Link href={cmsUrl} target='_blank'>{t("cmsLinkText")}</Link>)
	
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