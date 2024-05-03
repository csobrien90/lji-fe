import { Grant } from '../../types'
import translate from '@/app/hooks/translation'

const Grants = ({ grants }: { grants: Grant[] }) => {
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
		<section>
			<h2>{t("grantTitle")}</h2>
			{grants.map((grant, index) => {
				return (
					<article key={index}>
						<h3>{grant.title}</h3>
						<p>{t('grantDeadline', formatDateTime(grant.deadline))}</p>
						<p>{grant.description}</p>
						<a href={grant.url} target='_blank'>{t('moreInfo')}</a>
					</article>
				)
			})}
		</section>
	)
}

export default Grants