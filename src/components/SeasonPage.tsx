import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';

export const SeasonPage: React.FC<PageProps<Queries.SeasonPageQuery>> = ({ data }) => {
	const { gameTitle, content, year } = data.contentfulSeasonPage!;
	return (
		<main>
			<h1>{gameTitle}</h1>
			<div>{renderRichText(content)}</div>
			<Link to={`/seasons/${year}/members`}>{year} Roster</Link>
		</main>
	);
};

export const Head: HeadFC<Queries.SeasonPageQuery> = ({ data }) => (
	<title>
		{data.contentfulSeasonPage?.year}: {data.contentfulSeasonPage?.gameTitle} | RobotX
	</title>
);
