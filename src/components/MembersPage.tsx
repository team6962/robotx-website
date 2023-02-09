import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/MembersPage.module.css';

export const MembersPage: React.FC<PageProps<Queries.MembersPageQuery>> = ({ data, location }) => {
	const { year, leadership, members } = data.contentfulSeasonPage!;
	return (
		<>
			<h1>{year} Roster</h1>
			{leadership !== null && leadership.length !== 0 ? (
				<>
					<h3>Leadership</h3>
					<div className={styles.leadership}>
						{leadership?.map((member) => (
							<div>
								<GatsbyImage
									image={member?.gatsbyImageData!}
									alt={member?.title!}
									className={styles.image}
								/>
								<div className={styles.title}>
									{member?.description?.split('\n').map((line) => (
										<p>{line}</p>
									))}
								</div>
							</div>
						))}
					</div>
				</>
			) : null}
			{members !== null && members.length !== 0 ? (
				<>
					<h3>Membership</h3>
					<p className={styles.members}>
						{members?.map((member) => (
							<span>{member}</span>
						))}
					</p>
				</>
			) : null}
		</>
	);
};

export const Head: HeadFC<Queries.MembersPageQuery> = ({ data }) => (
	<title>{data.contentfulSeasonPage?.year} Roster | RobotX</title>
);
