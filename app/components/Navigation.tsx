import Link from 'next/link'

const Navigation = () => {
  return (
	<nav id="main-nav">
		<Link href={'/'}>Home</Link>
		<Link href={'/who-we-are'}>Who We Are</Link>
		<Link href={'/what-we-do'}>What We Do</Link>
		<Link href={'/get-involved'}>Get Involved!</Link>
	</nav>
  )
}

export default Navigation