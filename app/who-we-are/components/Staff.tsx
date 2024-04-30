import StaffBio from "./StaffBio"
import { fetchInitialData } from "../../assets/fetchInitialData"
import { StaffMember } from "../../types"

import translate from "@/app/hooks/translation"

const Staff = async () => {
	const { t } = translate()
	const { staff } = await fetchInitialData()
	return (
		<section id="staff">
			<h2>{t("staffTitle")}</h2>
			{staff && staff.map((staffMember: StaffMember, index: number) => (
				<StaffBio info={staffMember} key={index}/>
			))}
		</section>
	)
}

export default Staff