/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"roncador": "url('../src/assets/images/serra-do-roncador.jpg')",
			},
			gridTemplateRows: {
				"home-layout": "80px 1fr 48px",
				"pages-layout": "80px 1fr auto",
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")
	],
}
