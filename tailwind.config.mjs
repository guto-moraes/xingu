/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"roncador": "url('../src/assets/images/serra-do-roncador.jpg')",
			},
			gridTemplateRows: {
				"layout": "100px minmax(calc(1fr - 148px, 1fr) 48px",
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")
	],
}
