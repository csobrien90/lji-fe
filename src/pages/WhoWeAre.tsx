import Mission from "../components/Mission"
import Vision from "../components/Vision"
import Staff from "../components/Staff"
import History from "../components/History"
import PressKit from "../components/PressKit"
import { LjiData } from "@/types"

const WhoWeAre = (data: LjiData) => {
	return (
		<main>
			<h2>Who We Are</h2>
			<Mission layout='quote' />
			<Vision />
			<Staff {...data} />
			<History />
			<PressKit />
		</main>
	)
}

export default WhoWeAre