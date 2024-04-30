import Mission from '../components/Mission'
import Vision from './components/Vision'
import Staff from './components/Staff'
import History from './components/History'
import PressKit from './components/PressKit'

import translate from '../hooks/translation'

export default function WhoWeAre() {
	const { t } = translate()
	return (
		<main>
			<h1>{t("whoLink")}</h1>
			<Mission layout='quote' />
			<Vision />
			<Staff />
			<History />
			<PressKit />
		</main>
	)
}