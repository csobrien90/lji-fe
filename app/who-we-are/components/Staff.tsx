import StaffBio from "./StaffBio"
import { fetchInitialData } from "../../assets/fetchInitialData"
import { StaffMember } from "../../types"

const Staff = async () => {
	const { staff } = await fetchInitialData()
	return (
		<section id="staff">
			<h3>Staff</h3>
			{staff && staff.map((staffMember: StaffMember, index: number) => (
				<StaffBio info={staffMember} key={index}/>
			))}
		</section>
	)
}

export default Staff