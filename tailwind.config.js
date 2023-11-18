/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-color": "var(--primary)",
				"secondary-color": "var(--secondary)",
				"black-color": "var(--black)",
			},
			fontFamily: {
				satisfy: ["Satisfy", "cursive"],
				poppins: ["Poppins", "sans-serif"],
				"berkshire-swash": ["Berkshire Swash", "cursive"],
			},
		},
	},
	plugins: [],
};
