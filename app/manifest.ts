import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Louisville Jazz Initiative',
    short_name: 'Louisville Jazz Initiative',
    description: 'A non-profit organization dedicated to the preservation, promotion, and celebration of jazz music and culture in Louisville, KY',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
	  {
		src: '/apple-touch-icon.png',
		sizes: 'any',
		type: 'image/png',
	  },
	  {
		src: '/icon.png',
		sizes: 'any',
		type: 'image/png',
	  }
    ],
  }
}