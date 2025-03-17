export default {
	content: ['./*.{html,js}'],
	theme: {
		screens: {
			smartphone: '480px',
			tablet: '768px',
			desktop: '992px',
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				'mainColor': 'hsl(51, 100%, 50%)',
				ctaColor: '	hsl(231, 100%, 50%)',
				white: 'hsl(340, 100%, 98%)',
				gray: 'hsl(0, 0%, 27%)',
				footerColor: 'hsl(0 , 0% , 53%)'
			},
		},
		plugins: [],
	},
}