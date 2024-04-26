// Error: Invalid src prop (https://cdn.sanity.io/images/xa0q37p4/production/c6ec70b5be80e0cd83bae51788aca13ce4027713-1066x1599.jpg?w=600) on `next/image`, hostname "cdn.sanity.io" is not configured under images in your `next.config.js`
// See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
	},
}

module.exports = nextConfig
