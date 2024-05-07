const nextTranslate = require('next-translate-plugin')

const nextConfig = nextTranslate({
	reactStrictMode: false,
	images: {
		domains: ['cdn.sanity.io'],
	},
})

module.exports = nextConfig
