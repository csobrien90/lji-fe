import type { Metadata } from 'next'
import './globals.css'
import useTranslation from 'next-translate/useTranslation'

import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
	title: 'Louisville Jazz Initiative',
	description: 'A non-profit organization dedicated to the preservation of jazz music in Louisville, KY'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { t, lang } = useTranslation("copy")
	return (
		<html lang={lang}>
			<body>
			<Header />
			{children}
			<Footer />
		</body>
		</html>
	)
}
