import Mission from "../components/Mission"
import Vision from "../components/Vision"
import Staff from "../components/Staff"
import History from "../components/History"

const WhoWeAre = (props: any) => {
	console.log(props)
	return (
		<main>
			<h2>Who We Are</h2>
			<Mission />
			<Vision />
			<Staff />
			<History />
		</main>
	)
}

export default WhoWeAre