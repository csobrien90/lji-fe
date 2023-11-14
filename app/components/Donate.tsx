"use client"

import { DonateProps } from "../types"

import { usePathname } from "next/navigation"

const Donate = ({ form }: DonateProps ) => {
	const path = usePathname()
	if (path === '/get-involved' && form !== 'full') return <></>

	switch (form) {
		case 'button':
		case 'full':
		case 'modal':
			return <button className="donate">Donate</button>
			break;
		default:
			return <></>
	}
}

export default Donate