import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		plugin(({addBase, theme}) => {
			addBase({
				h1: {fontSize: theme("fontSize.4xl")},
				h2: {fontSize: theme("fontSize.lg")},
				h3: {fontSize: theme("fontSize.2xl")},
				h4: {fontSize: theme("fontSize.xl")},
				h5: {fontSize: theme("fontSize.lg")},
				h6: {fontSize: theme("fontSize.base")},
				p: {
					fontSize: theme("fontSize.md"),
					color: theme("colors.slate.400"),
				},
				a: {
					fontSize: theme("fontSize.md"),
					hover: theme("colors.slate.900"),
					color: theme("colors.slate.400"),
					fontWeight: theme("fontWeight.bold"),
				},
			});
		}),
	],
};
export default config;
