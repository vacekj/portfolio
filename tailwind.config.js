module.exports = {
	purge: {
		content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
	},
	theme: {
		extend: {
			screens: {
				print: { raw: "print" },
			},
		},
		backdropFilter: {
			blur: "blur(20px)",
		},
	},
	variants: {
		padding: ["responsive", "hover"],
		width: ["responsive", "hover"],
	},
	darkMode: "class",
	plugins: [require("tailwindcss-filters")],
};
