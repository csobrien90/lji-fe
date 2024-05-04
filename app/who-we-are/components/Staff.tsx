import StaffBio from "./StaffBio"
import { fetchInitialData } from "../../assets/fetchInitialData"
import { StaffMember } from "../../types"

import styles from "../styles/Staff.module.css"

import translate from "@/app/hooks/translation"

const Staff = async () => {
	const { t } = translate()
	const { staff } = await fetchInitialData()

	const hasAllInfo = (staffMember: StaffMember) => {
		return staffMember.name && staffMember.role && staffMember.bio && staffMember.image
	}
	return (
		<section className={styles.staffSection}>
			<h2>{t("staffTitle")}</h2>
			<div>
				{
					staff && staff
						.filter(a => hasAllInfo(a))
						.sort((a,b) => a.sortPriority - b.sortPriority)
						.map((staffMember: StaffMember, index: number) => (
							<StaffBio info={staffMember} key={index}/>
						))
				}
			</div>
		</section>
	)
}

export default Staff