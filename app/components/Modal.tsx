"use client"

import { SyntheticEvent, use } from "react"

import styles from "../assets/styles/Modal.module.css"

const Modal = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const clickOffCloseModal = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLElement
		const tag = target.tagName.toLowerCase()
		if (!['button', 'dialog'].includes(tag)) {
			e.stopPropagation()
		}
	}

	const closeButtonCloseModal = (e: React.MouseEvent) => {
		const dialog = e.currentTarget.closest('dialog')
		if (dialog) dialog.close()
	}
 
	const focusContent = (e: SyntheticEvent) => {
		const target = e.target as HTMLDivElement
		target.focus()
	}

	return (
		<dialog className={styles.modal} onClick={clickOffCloseModal}>
			<div className={styles.content} onLoad={focusContent}>
				<button
					className={styles.close}
					aria-label="Close"
					title="Close"
					onClick={closeButtonCloseModal}
				>&#66338;</button>
				{
					Array.isArray(children)
						? children.map((child, i) => <div key={i}>{child}</div>)
						: children
				}
			</div>
		</dialog>
	)
}

export default Modal