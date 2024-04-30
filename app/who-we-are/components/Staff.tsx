import StaffBio from "./StaffBio"
import { fetchInitialData } from "../../assets/fetchInitialData"
import { StaffMember } from "../../types"

import styles from "../styles/Staff.module.css"

import translate from "@/app/hooks/translation"

const Staff = async () => {
	const { t } = translate()
	const { staff } = await fetchInitialData()
	return (
		<section className={styles.staffSection}>
			<h2>{t("staffTitle")}</h2>
			<div>
				{staff && staff.map((staffMember: StaffMember, index: number) => (
					<StaffBio info={staffMember} key={index}/>
				))}
			</div>
		</section>
	)
}

export default Staff