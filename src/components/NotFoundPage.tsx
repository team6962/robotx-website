import * as React from 'react';
import { HeadFC, PageProps, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/NotFoundPage.module.css';

export const NotFoundPage: React.FC<PageProps> = ({ location }) => {
	const { contentfulAsset } = useStaticQuery<Queries.NotFoundQuery>(graphql`
		query NotFound {
			contentfulAsset(title: { eq: "404" }) {
				gatsbyImageData(quality: 100)
				description
			}
		}
	`);

	return (
		<>
			<h1>404</h1>
			<p>
				Sorry, we couldn’t find what you were looking for.{' '}
				<a
					href={`mailto:contact@team6962.com?subject=Website%20404&body=${encodeURIComponent(
						location.pathname
					)}%20looks%20like%20it's%20missing%20from%20the%20team%20website.`}
				>
					Let us know
				</a>{' '}
				if you think this is a mistake!
			</p>
			<GatsbyImage
				image={contentfulAsset?.gatsbyImageData!}
				alt={contentfulAsset?.description!}
				className={styles.image}
			/>
		</>
	);
};

export const Head: HeadFC = () => <title>404 | Antares</title>;
