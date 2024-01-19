import Link from 'next/link'
import Image from 'next/image'

import facebookIcon from '../assets/images/facebookicon.png'
import instagramIcon from '../assets/images/instagramicon.png'

const SocialMediaLinks = (): JSX.Element => {
	return (
		<nav id="social-media-links">
			<Link
				href="https://www.facebook.com/Louisville-Jazz-Initiative-103098041901352"
				target="_blank"
				title="Louisville Jazz Initiative facebook page"
				style={{["--social-media-hover" as any]: "#4267B2"}}
			>
				<Image src={facebookIcon} alt="facebook logo" />
			</Link>
			<Link
				href="https://www.instagram.com/louisvillejazzinitiative/"
				target="_blank"
				title="Louisville Jazz Initiative instagram page"
				style={{["--social-media-hover" as any]: "#E1306C"}}	
			>
				<Image src={instagramIcon} alt="instagram logo" />
			</Link>
			{/* <li>TikTok</li> */}
			{/* <li>Slack/Discord</li> */}
		</nav>
	)
}

export default SocialMediaLinks