/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'yellow-logo': '#fcb75e',
				'red-logo':'#d6587f'
      },
			backgroundImage: {
        'room': "url('/src/assets/room1.jpg')",
        'roomie': "url('/src/assets/roomie-1.jpg')",
        'bannerWeb': "url('/src/assets/banner-web.jpg')",
        'roomie1': "url('/src/assets/room2.jpg')",
        'room1': "url('/src/assets/room22.jpg')",
				
      }
		},
	},
	plugins: [],
}
