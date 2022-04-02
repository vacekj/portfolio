module.exports = {
	i18n: {
		locales: ["cs", "en"],
		defaultLocale: "cs",
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://github.com/vacekj',
				permanent: true,
			},
		]
  },
};
