import { StaffBioProps } from "@/types"
import { Link } from 'react-router-dom'

const StaffBio = ({info}: StaffBioProps) => {
	
	const showBioModal = (): any => {
		const modal: HTMLDialogElement = document.createElement('dialog')
		modal.classList.add('staff-modal')
		modal.addEventListener('click', (e: MouseEvent) => {
			if (e.target && e.target instanceof HTMLDialogElement) e.target.remove()
		})

		const content: HTMLDivElement = document.createElement('div')
		content.classList.add('content')
		content.innerHTML = `
			<h4>${info.name}</h4>
			<p>${info.role}</p>
			<p>${info.bio}</p>
		`

		// Add Instagram/Website if available
		
		modal.append(content)
		document.querySelector('main')?.append(modal)
		content.focus()
	}

	return (
		<article className="staff-bio" onClick={showBioModal}>
			<span className="staff-profile"><img src={info.image} alt={info.imageAlt} /></span>
			<h4 className="staff-name">{info.name}</h4>
			<p className="staff-title">{info.role}</p>
			<p>{info.bio}</p>
			{(info.instagram) && (
				<p>Follow {info.name.split(' ')[0]} on Instagram <Link to={info.instagram}>@{info.instagram.split('/').at(-1)}</Link></p>
			)}
		</article>
	)
}

export default StaffBio