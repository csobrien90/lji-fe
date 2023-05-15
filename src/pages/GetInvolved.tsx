import Donate from "../components/Donate"
import Contact from "../components/Contact"
import SlackInfo from "../components/SlackInfo"

const GetInvolved = (props: any) => {
	console.log(props)
	return (
		<main>
			<h2>Get Involved</h2>
			<Contact />
			<Donate form={'full'} />
			<SlackInfo />
		</main>
	)
}

export default GetInvolved