/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif']
		},
		extend: {
			colors: {
				main: {
					500: "#e7a42f",
					600: "#e2991a"
				}
			},
			backgroundImage: {
				'hero-clouds': "url('/background/bg.jpg')",
				'brown-texture': "url('/background/background-marrom.jpg')",
				'white-texture': "url('/background/background-branco.jpg')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}