import StaffBio from "./StaffBio"
import { LjiData, StaffMember } from "@/types"

const Staff = ({ staff }: LjiData) => {
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