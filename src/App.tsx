import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import GetInvolved from "./pages/GetInvolved";

// import template components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import styles
import "./index.css"

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/who-we-are" element={<WhoWeAre />} />
				<Route path="/what-we-do" element={<WhatWeDo />} />
				<Route path="/get-involved" element={<GetInvolved />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App