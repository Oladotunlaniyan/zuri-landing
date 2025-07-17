/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Use hsl to interpolate custom properties
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: "hsl(var(--card))",
				"card-foreground": "hsl(var(--card-foreground))",
				// ... Repeat for any other vars you need:
				primary: "hsl(var(--primary))",
				"primary-foreground": "hsl(var(--primary-foreground))",
			},
		},
	},
	plugins: [],
};
