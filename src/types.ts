export interface LjiData {
	blog: any
	staff: StaffMember[]
	newsItem: any
	event: any
}

export interface StaffMember {
	name: string
	role: string,
	image: string,
	imageAlt: string,
	bio: string,
	instagram: string | null,
	website: string | null
}

export interface DonateProps {
	form: 'button' | 'full' | 'modal'
}

export interface LogoProps {
	size: 'small' | 'medium' | 'large'
}

export interface MissionProps {
	layout: 'feature' | 'quote'
}

export interface YouTubeProps {
	src: string
}

export interface StaffBioProps {
	info: StaffMember,
}