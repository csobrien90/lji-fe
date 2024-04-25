"use client"

import { SyntheticEvent } from "react"

const Modal = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const clickOffCloseModal = (e: React.MouseEvent) => {
		if (e.target && e.target instanceof HTMLDialogElement) e.target.close()
	}

	const closeButtonCloseModal = (e: React.MouseEvent) => {
		const dialog = e.currentTarget.closest('dialog')
		if (dialog) dialog.close()
	}

	const focusContent = (e: SyntheticEvent) => {
		(e.target as HTMLDivElement).focus()
	}

	return (
		<dialog className="modal" onClick={clickOffCloseModal}>
			<button
				className="close-button"
				aria-label="Close"
				title="Close"
				onClick={closeButtonCloseModal}
			>&#66338;</button>
			<div className="content" onLoad={focusContent}>
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