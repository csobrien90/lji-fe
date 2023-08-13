import { StaffBioProps } from "@/types"
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
		
		modal.append(content)
		document.querySelector('main')?.append(modal)
		content.focus()
	}

	const srcArr = info.image.asset._ref.split('-')
	const imageSrc = `${srcArr[1]}-${srcArr[2]}.${srcArr[3]}`
	const finalImgSrc = (process.env.IMG_CDN as string) + imageSrc

	return (
		<article className="staff-bio" onClick={(e: React.MouseEvent) => showBioModal(e)}>
			<span className="staff-profile"><img src={finalImgSrc} alt={info.imageAlt} /></span>
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