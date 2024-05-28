import { isInTheFuture } from '@/app/assets/utils/time'
import { Grant } from '../../types'
import translate from '@/app/hooks/translation'
import Link from 'next/link'
import Card from '@/app/components/Card'

import styles from '../styles/Grants.module.css'

const Grants = ({ grants }: { grants: Grant[] }) => {
	const { t } = translate()

	const filteredAndSortedGrants = grants.filter(g => {
		const epoch = new Date(g.deadline).getTime()
		return isInTheFuture(epoch)
	}).sort((a: Grant, b: Grant): number => {
		return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
	})

	if (filteredAndSortedGrants.length === 0) return null

	return (
		<section className={styles.grants}>
			<h2>{t("grantTitle")}</h2>
			<ul className="card-list">
				{filteredAndSortedGrants.map((grant, index) => {
					return (
						<Card
							key={index}
							header={<GrantHeader grant={grant} />}
							expandingContent={<GrantBody grant={grant} />}
						/>
					)
				})}
			</ul>
		</section>
	)
}

const GrantHeader = ({ grant }: { grant: Grant }) => {
	const { t } = translate()

	const formatDateTime = (dateString: string) => {
		const deadline = new Date(dateString)

		const formattedDate = deadline.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})

		const formattedTime = deadline.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			timeZone: 'America/New_York',
		})

		return { formattedDate, formattedTime }
	}

	return (
		<>
			<h3>{grant.title}</h3>
			<p>{t('grantDeadline', formatDateTime(grant.deadline))}</p>
		</>
	)
}

const GrantBody = ({ grant }: { grant: Grant }) => {
	const { t } = translate()

	return (
		<>
			<p>{grant.description}</p>
			<Link href={grant.url} target='_blank'>{t('moreInfo')}</Link>
		</>
	)
}

export default Grants