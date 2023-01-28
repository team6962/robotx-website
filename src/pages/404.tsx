import * as React from 'react';
import { Link, HeadFC, PageProps, useStaticQuery, graphql } from 'gatsby';
import { PageWrapper } from '../components/PageWrapper';
import { GatsbyImage } from 'gatsby-plugin-image';

const NotFoundPage: React.FC<PageProps> = () => {
	const { contentfulAsset } = useStaticQuery<Queries.NotFoundQuery>(graphql`
		query NotFound {
			contentfulAsset(title: { eq: "404" }) {
				gatsbyImageData(quality: 100)
				description
			}
		}
	`);

	return (
		<PageWrapper>
			<h1>Page not found</h1>
			<p>
				Sorry, we couldn’t find what you were looking for.
				<br />
				<GatsbyImage
					image={contentfulAsset?.gatsbyImageData!}
					alt={contentfulAsset?.description!}
				/>
				<br />
				<Link to="/">Back to home</Link>.
			</p>
		</PageWrapper>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 | RobotX</title>;
