/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				layout: "80px auto 48px",
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms")
	],
}
