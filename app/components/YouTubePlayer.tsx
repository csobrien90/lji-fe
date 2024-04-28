import { YouTubeProps } from "../types"

import styles from "../assets/styles/YouTubePlayer.module.css"

const YouTubePlayer = ({ src }: YouTubeProps): JSX.Element => {
	return (
	<div className={styles["youtube-iframe-wrapper"]}><iframe
		// width='100%'
		// height='auto'
		src={src}
		title="YouTube video player"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
	></iframe></div>
	)
}

export default YouTubePlayer