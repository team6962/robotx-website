import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';
import { PageWrapper } from './PageWrapper';

import * as styles from '../styles/SeasonPage.module.css';

export const SeasonPage: React.FC<PageProps<Queries.SeasonPageQuery>> = ({ data, location }) => {
	const { gameTitle, content, year, featuredBlogPost } = data.contentfulSeasonPage!;
	return (
		<PageWrapper location={location}>
			<h1>
				{year}: {gameTitle}
			</h1>
			<div>{renderRichText(content)}</div>
			<div className={styles.links}>
				<Link to={`/seasons/${year}/members`}>View the roster</Link>
				<Link to={`/blog/${featuredBlogPost?.slug}`}>Read the blog</Link>
			</div>
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.SeasonPageQuery> = ({ data }) => (
	<title>
		{data.contentfulSeasonPage?.year}: {data.contentfulSeasonPage?.gameTitle} | RobotX
	</title>
);
