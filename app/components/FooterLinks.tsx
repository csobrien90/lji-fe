import Link from "next/link"

const FooterLinks = () => {
	return (
		<nav>
			<Link href={'/artist-resources'}>Teaching Artist Resources</Link>
			<Link href={'/code-of-conduct'}>Code of Conduct</Link>
		</nav>
	)
}

export default FooterLinks