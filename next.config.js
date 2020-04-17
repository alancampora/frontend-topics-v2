const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	env: {
		GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
		PROD_URL: process.env.PROD_URL,
		APP_ENVIRONMENT: process.env.APP_ENVIRONMENT,
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
