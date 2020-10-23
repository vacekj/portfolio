module.exports = {
	purge: {
		content: [
			"./components/**/*.tsx",
			"./pages/**/*.tsx",
			"./components/**/*.tsx",
			"./pages/**/*.tsx"
		]
	},
	theme: {
		extend: {},
		backdropFilter: {
			blur: "blur(20px)"
		}
	},
	variants: {
		padding: ["responsive", "hover"],
		width: ["responsive", "hover"]
	},
	plugins: [require("tailwindcss-filters")]
};
