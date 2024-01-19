import { MissionProps } from "../types"

const Mission = ({ layout }: MissionProps) => {
	return (
		<section id="mission" className={layout}>
			<h2>Our Mission</h2>
			<p>The Louisville Jazz Initiative (LJI) is a diverse, inter-generational coalition of musicians and educators committed to the authentic teaching and performing of jazz; that is, in a way that preserves the connection between the art form and its cultural and historical context, highlights the inherent value of each individual's experience and expression, and empowers its participants to advocate for social and racial justice.</p>
		</section>
	)
}

export default Mission