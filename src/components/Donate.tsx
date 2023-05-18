import { DonateProps } from "@/types"

const Donate = ({ form }: DonateProps ) => {
	switch (form) {
		case 'button':
		case 'full':
		case 'modal':
			return <button id="donate">Donate</button>
			break;
		default:
			return <></>
	}
}

export default Donate