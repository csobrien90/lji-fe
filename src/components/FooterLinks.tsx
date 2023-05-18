import { Link } from "react-router-dom"

const FooterLinks = () => {
	return (
		<nav>
			<Link to={'/artist-resources'}>Teaching Artist Resources</Link>
			<Link to={'/code-of-conduct'}>Code of Conduct</Link>
		</nav>
	)
}

export default FooterLinks