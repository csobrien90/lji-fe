import { YouTubeProps } from "../types"

const YouTubePlayer = ({ src }: YouTubeProps): JSX.Element => {
	return (
	<div className="youtube-iframe-wrapper"><iframe
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