import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { PageWrapper } from './PageWrapper';

export const SeasonArchive: React.FC<PageProps<Queries.SeasonArchiveQuery>> = ({ data }) => {
	const { nodes } = data.allContentfulSeasonPage;
	return (
		<PageWrapper>
			<h1>Season Archive</h1>
			{nodes.map((season) => (
				<Link to={`/seasons/${season.year}`}>
					<div>
						<p>
							{season.year}: {season.gameTitle}
						</p>
					</div>
				</Link>
			))}
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.SeasonArchiveQuery> = ({ data }) => (
	<title>Season Archive | RobotX</title>
);
