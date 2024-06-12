"use client";

import Link from 'next/link'
import styles from "../assets/styles/Navigation.module.css"
// import translate from '@/app/hooks/translation'

const Navigation = () => {
	// BUG: Translation in this component (and this component alone) is causing hydration errors
	// Temporary fix: Hardcode the navigation link text
	// const { t } = translate()

	return (
		<nav className={styles["main-nav"]}>
			<Link href={'/who-we-are'}>Who We Are</Link>
			<Link href={'/what-we-do'}>What We Do</Link>
			<Link href={'/get-involved'}>Get Involved!</Link>
			<Link href={'/artist-resources'}>Teaching Artist Resources</Link>
			<Link href={'/code-of-conduct'}>Code of Conduct</Link>
			{/* <DonateButton /> */}
		</nav>
	)
}

export default Navigation