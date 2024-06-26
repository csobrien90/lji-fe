import Link from 'next/link'
import Image from 'next/image'

import useTranslate from '../hooks/translation'

import facebookIcon from '../assets/images/facebookicon.png'
import instagramIcon from '../assets/images/instagramicon.png'

import styles from '../assets/styles/SocialMediaLinks.module.css'

const SocialMediaLinks = (): JSX.Element => {
	const { t } = useTranslate()
	return (
		<nav className={styles["social-media-links"]}>
			<header><p>{t('socialMediaCTA')}</p></header>
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