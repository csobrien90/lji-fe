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
						<p className="staff-bio">{info.bio}</p>
						<p className="staff-title">{info.role}</p>
						{(info.instagram) ? (
							<p className="staff-social-links">{t("instagramCTA", {firstName: info.name.split(' ')[0]})} <Link href={info.instagram}>@{info.instagram.split('/').at(-1)}</Link></p>
						) : <></>}
					</Modal>
				)
			}
		</article>
	)
}

export default StaffBio

const BioContents = ({name, image, imageAlt}: {name: string, image: SanityImage, imageAlt: string}) => {
	// Build Sanity CDN image src
	const imgSrc = makeImageSrc(image)

	return (
		<>
			<span className="staff-profile">
				<Image src={imgSrc} alt={imageAlt} width={200} height={200} />
			</span>
			<h3 className="staff-name">{name}</h3>
		</>
	)
}