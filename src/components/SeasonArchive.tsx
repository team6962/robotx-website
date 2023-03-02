import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/SeasonArchive.module.css';

export const SeasonArchive: React.FC<PageProps<Queries.SeasonArchiveQuery>> = ({
	data,
	location
}) => {
	const { nodes } = data.allContentfulSeasonPage;
	return (
		<>
			<h1>Season Archive</h1>
			<div className={styles.archive}>
				{nodes.map((season) => (
					<Link to={`/seasons/${season.year}`} key={season.year}>
						<GatsbyImage
							image={season.thumbnail?.gatsbyImageData!}
							alt={season.year!}
							className={styles.image}
						/>
						<p>
							{season.year}: {season.gameTitle}
						</p>
					</Link>
				))}
			</div>
		</>
	);
};

export const Head: HeadFC<Queries.SeasonArchiveQuery> = () => (
	<title>Season Archive | RobotX</title>
);
