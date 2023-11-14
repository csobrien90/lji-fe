import { LjiData } from '../types';

export const defaultLjiData: LjiData = {
	blogPosts: [
		{
			title: '',
			body: '',
			bodyImage: '',
			bodyImageAlt: '',
			author: '',
			authorImage: '',
			authorImageAlt: '',
			datePublished: '',
		}
	],
	staff: [
		{
			name: 'Chad O\'Brien',
			role: 'Operations Manager',
			image: {
				asset: {
					_ref: 'image-ref',
					_type: 'image-type'
				}
			},
			imageAlt: 'image-alt',
			bio: 'INSERT BIO HERE',
			instagram: 'ig.com/obrientrombone',
			website: 'https://web.site'
		}
	],
	newsItems: [
		{
			title: 'It\'s Official!',
			body: 'It\'s been over a year in the making but we are very happy to announce that Louisville Jazz Initiative has received our 501(c)(3) tax exempt status! This new designation will provide us with even more opportunities to play and teach jazz music throughout our city and we look forward to bringing all our efforts and resources to bear in support of our community. In practice, now we can accept tax exempt donations and have access to more public and private grants.',
			image: null,
			imageAlt: null,
			link: null,
			linkText: null
		}
	],
	events: [
		{
			title: 'Jam Session 1',
			venue: 'The Monarch Music & Arts Community',
			address: '1318 Bardstown Rd, Louisville, KY',
			time: '4-7pm on March 28th, 2023',
			epoch: 1684641583408,
			desc: 'A fun monthly jam we put on every month where people come and jam monthly.',
			link: 'https://themonarchmac.org',
		},
		{
			title: 'Jam Session 2',
			venue: 'The Monarch Music & Arts Community',
			address: '1318 Bardstown Rd, Louisville, KY',
			time: '4-7pm on March 28th, 2023',
			epoch: 1684641583408,
			desc: 'A fun monthly jam we put on every month where people come and jam monthly.',
			link: 'https://themonarchmac.org',
		}
	]
}