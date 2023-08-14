import { makeImageSrc } from "../lib/sanityUtilities"
import { StaffBioProps } from "../types"
import { Link } from 'react-router-dom'

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
			<span className="staff-profile"><img src={imgSrc} alt={info.imageAlt} /></span>
			<h4 className="staff-name">{info.name}</h4>
			<p className="staff-title">{info.role}</p>
			<p className="staff-bio">{info.bio}</p>
			{(info.instagram) && (
				<p className="staff-social-links">Follow {info.name.split(' ')[0]} on Instagram <Link to={info.instagram}>@{info.instagram.split('/').at(-1)}</Link></p>
			)}
		</article>
	)
}

export default StaffBio