const nextTranslate = require('next-translate-plugin')

const nextConfig = nextTranslate({
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
	},
})

module.exports = nextConfig
