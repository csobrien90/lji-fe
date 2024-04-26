"use client";

import { useState, useEffect } from "react";

const MainNavCheckbox = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => toggleNav()
	const toggleNav = () => setIsOpen(!isOpen)

	useEffect(() => {
		const unclick = (e: Event) => {
			if (!isOpen) return
			const { id } = (e.target as HTMLElement);
			if (id === 'main-nav' || id === 'main-nav-checkbox') return;
			toggleNav();
		}
		window.addEventListener('click', unclick);
		return () => window.removeEventListener('click', unclick);
	}, [isOpen])

	return (
		<input
			type="checkbox"
			id="main-nav-checkbox"
			onChange={handleClick}
			checked={isOpen}
		/>
	);
}

export default MainNavCheckbox;