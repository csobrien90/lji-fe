export interface LjiData {
	blogPosts: BlogPost[]
	staff: StaffMember[]
	newsItems: NewsItem[]
	events: Event[]
	grants: Grant[]
}

export interface Grant {
	title: string,
	description: string,
	deadline: string,
	url: string,
	tags: string[]
}

export interface StaffMember {
	name: string
	role: string,
	image: SanityImage,
	imageAlt: string,
	bio: string,
	instagram: string | null,
	website: string | null,
	sortPriority: number
}

export interface SanityImage {
	asset: {
		_ref: string,
		_type: string
	}
}

export interface Event {
	title: string,
	venue: string,
	address: string,
	time: string,
	epoch: number,
	desc: string,
	link: string,
	isPublic: boolean
}

export interface NewsItem {
	title: string,
	body: string,
	image: SanityImage | null,
	imageAlt: string | null,
	link: string | null,
	linkText: string | null,
	_updatedAt: string
	_createdAt: string
}

export interface BlogPost {
	title: string,
	body: string,
	bodyImage: string,
	bodyImageAlt: string,
	author: string,
	authorImage: string,
	authorImageAlt: string,
	datePublished: string,
}

export interface DonateProps {
	form: 'button' | 'full' | 'modal'
}

export interface LogoProps {
	size: 'small' | 'medium' | 'large',
	color: string,
	isLink?: boolean
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

export interface EventProps {
	limit?: number | null,
	events: Event[],
	showPrivateEvents?: boolean
}

export interface NewsProps {
	newsItems: NewsItem[]
}

export interface BlogProps {
	blogPosts: BlogPost[]
}

export interface NotificationProps {
	message: string,
	type: 'success' | 'error' | 'info' | 'warning'
}

export interface Picture {
	_updatedAt: string,
	imageAlt: string,
	imageCredit: string,
	image: SanityImage,
	_id: string,
	imageCreditLink: string,
	caption: string,
	title: string,
	_createdAt: string,
	_rev: string,
	_type: 'img'
}
