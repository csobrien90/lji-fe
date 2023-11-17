"use client"

import { makeImageSrc } from "../../assets/utils/sanityUtilities"
import { StaffBioProps } from "../../types"
import Link from 'next/link'
import Image from 'next/image'

const StaffBio = ({info}: StaffBioProps) => {
	
	const showBioModal = (e: React.MouseEvent): void => {
		const modal: HTMLDialogElement = document.createElement('dialog')
		modal.classList.add('staff-modal')
		modal.addEventListener('click', (e: MouseEvent) => {
			if (e.target && e.target instanceof HTMLDialogElement) e.target.remove()
		})

		const content: HTMLDivElement = document.createElement('div')
		content.classList.add('content')
		
		// Add all content from clicked html
		content.innerHTML = e.currentTarget.innerHTML

		// Add close button
		const closeButton: HTMLButtonElement = document.createElement('button')
		closeButton.classList.add('close-button')
		closeButton.innerHTML = '&#66338;'
		closeButton.setAttribute('aria-label', 'Close')
		closeButton.setAttribute('title', 'Close')
		closeButton.addEventListener('click', (e: MouseEvent) => {
			if (e.target && e.target instanceof HTMLButtonElement) {
				e.target.parentElement?.parentElement?.remove()
			}
		})
		content.append(closeButton)
		
		modal.append(content)
		document.querySelector('main')?.append(modal)
		content.focus()
	}

	// Build Sanity CDN image src
	const imgSrc = makeImageSrc(info.image)

	return (
		<article className="staff-article" onClick={(e: React.MouseEvent) => showBioModal(e)}>
			<span className="staff-profile">
				<Image src={imgSrc} alt={info.imageAlt} width={200} height={200} />
			</span>
			<h4 className="staff-name">{info.name}</h4>
			<p className="staff-title">{info.role}</p>
			<p className="staff-bio">{info.bio}</p>
			{(info.instagram) && (
				<p className="staff-social-links">Follow {info.name.split(' ')[0]} on Instagram <Link href={info.instagram}>@{info.instagram.split('/').at(-1)}</Link></p>
			)}
		</article>
	)
}

export default StaffBio