import type { GatsbyConfig } from 'gatsby';
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Antares`,
		siteUrl: `https://team6962.com`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'bliez1sb04y6',
				accessToken:
					process.env.CONTENTFUL_MODE === 'PREVIEW'
						? process.env.CONTENTFUL_PREVIEW_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN,
				host:
					process.env.CONTENTFUL_MODE === 'PREVIEW' ? 'preview.contentful.com' : undefined
			}
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass'
	]
};

export default config;
