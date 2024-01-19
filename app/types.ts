export interface LjiData {
	blogPosts: BlogPost[]
	staff: StaffMember[]
	newsItems: NewsItem[]
	events: Event[]
}

export interface StaffMember {
	name: string
	role: string,
	image: SanityImage,
	imageAlt: string,
	bio: string,
	instagram: string | null,
	website: string | null
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
	link: string
}

export interface NewsItem {
	title: string,
	body: string,
	image: string | null,
	imageAlt: string | null,
	link: string | null,
	linkText: string | null
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
	color: string
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
	limit: number | null,
	events: Event[]
}

export interface NewsProps {
	newsItems: NewsItem[]
}

export interface BlogProps {
	blogPosts: BlogPost[]
}