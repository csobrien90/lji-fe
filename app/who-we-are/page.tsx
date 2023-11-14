import Mission from '../components/Mission'
import Vision from './components/Vision'
import Staff from './components/Staff'
import History from './components/History'
import PressKit from './components/PressKit'

export default function WhoWeAre() {
	return (
		<main>
			<h1>Who We Are</h1>
			<Mission layout='quote' />
			<Vision />
			<Staff />
			<History />
			<PressKit />
		</main>
	)
}