"use client"

import useTranslate from "../hooks/translation"
import styles from "./styles.module.css"

export default function Watch() {
	const { t } = useTranslate()
	return (
		<>
			<main className={styles['switcher-wrapper']}>
				<div
					className="dff402f7-5be0-4890-b831-95c5b63ddb42"
					data-hostname="https://player.switcherstudio.com"
					data-path="/embed"
					data-videoplayerid="68a8c2e3-dfb7-44a8-9e6a-3723c6b27a83"
					data-location="iframe"
				></div>
				<script src = "https://player.switcherstudio.com/embed.js" async></script>
			</main>
		</>
	)
}