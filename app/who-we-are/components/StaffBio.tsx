"use client"

import { makeImageSrc } from "../../assets/utils/sanityUtilities"
import { SanityImage, StaffBioProps } from "../../types"
import Link from 'next/link'
import Image from 'next/image'
import Modal from '../../components/Modal'
import { useState } from 'react'

import styles from "../styles/StaffBio.module.css"

import translate from "@/app/hooks/translation"

const StaffBio = ({info}: StaffBioProps) => {
	const { t } = translate()
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<article className={styles["staff-article"]} onClick={() => {setModalOpen(!modalOpen)}}>
			<BioContents {...info} />
			{
				modalOpen && (
					<Modal>
						<BioContents {...info} />
						<p>{info.bio}</p>
						{(info.instagram) ? (
							<p className={styles.instaCTA}>
								{t("instagramCTA", {firstName: info.name.split(' ')[0]})} 
								<Link href={info.instagram} target="_blank">
									@{info.instagram.split('/').at(-1)}
								</Link>
							</p>
						) : <></>}
					</Modal>
				)
			}
		</article>
	)
}

export default StaffBio

const BioContents = ({name, role, image, imageAlt}: {name: string, role: string, image: SanityImage, imageAlt: string}) => {
	// Build Sanity CDN image src
	const imgSrc = makeImageSrc(image)

	return (
		<>
			<span className={styles.imageWrapper}>
				<Image src={imgSrc} alt={imageAlt} width={200} height={200} />
			</span>
			<h3>{name}</h3>
			<p className={styles.role}>{role}</p>
		</>
	)
}