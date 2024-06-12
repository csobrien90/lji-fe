"use client"

import { useState } from "react"
import Modal from "@/app/components/Modal"
import useTranslate from "@/app/hooks/translation"
import styles from "../styles/Profile.module.css"

export default function Profile({ user }: { user: any }) {
	const [isExpanded, setIsExpanded] = useState(false)
	const { t } = useTranslate()

	if (!user) return null


	const handleExpand = () => {
		setIsExpanded(!isExpanded)
	}

	const handleClick = () => {
		setIsExpanded(false)
	}
	
	return (
		<>
			<div className={styles.profileButtonWrapper}>
				<img src={user.picture} alt={user.name} onClick={handleExpand} className={styles.profileButton} />
				<a href="/api/auth/logout">{t("logout")}</a>
			</div>
			{
				isExpanded && (
					<div onClick={handleClick}>
						<Modal customClose={handleExpand}>
							<div className={styles.modalProfile}>
								<img src={user.picture} alt={user.name} className={styles.profileImage} />
								<h2>{user.name}</h2>
								<p>{user.email}</p>
							</div>
						</Modal>
					</div>
				)
			}
		</>
	)
}