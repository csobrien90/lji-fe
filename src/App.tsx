import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

// import pages
import Home from "./pages/Home"
import WhoWeAre from "./pages/WhoWeAre"
import WhatWeDo from "./pages/WhatWeDo"
import GetInvolved from "./pages/GetInvolved"
import ArtistResources from "./pages/ArtistResources"
import CodeOfConduct from "./pages/CodeOfConduct"

// import template components
import Header from "./components/Header"
import Footer from "./components/Footer"

// import functions
import { fetchInitialData } from "./lib/fetchInitialData"

// import styles
import "./index.css"

// import types
import { LjiData } from "./types"

const App = () => {
	const defaultLjiData: LjiData = {
		blogPosts: [
			{
				title: '',
				body: '',
				bodyImage: '',
				bodyImageAlt: '',
				author: '',
				authorImage: '',
				authorImageAlt: '',
				datePublished: '',
			}
		],
		staff: [
			{
				name: 'Chad O\'Brien',
				role: 'Operations Manager',
				image: 'https://unsplash.com/200x200',
				imageAlt: 'image-alt',
				bio: 'INSERT BIO HERE',
				instagram: 'ig.com/obrientrombone',
				website: 'https://web.site'
			}
		],
		newsItems: [
			{
				title: 'It\'s Official!',
				body: 'It\'s been over a year in the making but we are very happy to announce that Louisville Jazz Initiative has received our 501(c)(3) tax exempt status! This new designation will provide us with even more opportunities to play and teach jazz music throughout our city and we look forward to bringing all our efforts and resources to bear in support of our community. In practice, now we can accept tax exempt donations and have access to more public and private grants.',
				image: null,
				imageAlt: null,
				link: null,
				linkText: null
			}
		],
		events: [
			{
				title: 'Jam Session 1',
				venue: 'The Monarch Music & Arts Community',
				address: '1318 Bardstown Rd, Louisville, KY',
				time: '4-7pm on March 28th, 2023',
				epoch: 1684641583408,
				desc: 'A fun monthly jam we put on every month where people come and jam monthly.',
				link: 'https://themonarchmac.org',
			},
			{
				title: 'Jam Session 2',
				venue: 'The Monarch Music & Arts Community',
				address: '1318 Bardstown Rd, Louisville, KY',
				time: '4-7pm on March 28th, 2023',
				epoch: 1684641583408,
				desc: 'A fun monthly jam we put on every month where people come and jam monthly.',
				link: 'https://themonarchmac.org',
			}
		]
	}

	const [data, setData] = useState<LjiData>(defaultLjiData)

	useEffect(() => {
		fetchInitialData().then((data) => {
			setData(data)
		}).catch(reason => {
			console.error(reason)
			setData(defaultLjiData)
		})
	}, [])
	
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home {...data} />} />
				<Route path="/who-we-are" element={<WhoWeAre {...data} />} />
				<Route path="/what-we-do" element={<WhatWeDo {...data} />} />
				<Route path="/get-involved" element={<GetInvolved {...data} />} />
				<Route path="/artist-resources" element={<ArtistResources />} />
				<Route path="/code-of-conduct" element={<CodeOfConduct />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App