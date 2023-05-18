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
		blog: '',
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
		newsItem: '',
		event: ''
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
				<Route path="/" element={<Home />} />
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