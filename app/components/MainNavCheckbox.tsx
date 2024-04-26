"use client";

import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";

const MainNavCheckbox = () => {	
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => toggleNav()
	const toggleNav = () => setIsOpen(!isOpen)

	useEffect(() => {
		const unclick = (e: Event) => {
			if (!isOpen) return
			const { id } = (e.target as HTMLElement);
			
			if (['main-nav', 'main-nav-checkbox', 'main-nav-checkbox-label', 'ham-svg'].includes(id)) return;
			toggleNav();
		}
		window.addEventListener('click', unclick);
		return () => window.removeEventListener('click', unclick);
	}, [isOpen])

	return (
		<label htmlFor="main-nav-checkbox" id="main-nav-checkbox-label">
			<input
				type="checkbox"
				id="main-nav-checkbox"
				onChange={handleClick}
				checked={isOpen}
			/>
			<Hamburger />
		</label>
	);
}

export default MainNavCheckbox;