import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

// import pages
import Home from "./pages/Home"
import WhoWeAre from "./pages/WhoWeAre"
import WhatWeDo from "./pages/WhatWeDo"
import GetInvolved from "./pages/GetInvolved"
import ArtistServices from "./pages/ArtistServices"

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
	const [data, setData] = useState<LjiData>({})

	useEffect(() => {
		fetchInitialData().then((data) => {
			setData(data)
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
				<Route path="/artist-services" element={<ArtistServices />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App