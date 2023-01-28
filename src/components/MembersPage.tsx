import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PageWrapper } from './PageWrapper';

export const MembersPage: React.FC<PageProps<Queries.MembersPageQuery>> = ({ data }) => {
	const { year, leadership, members } = data.contentfulSeasonPage!;
	return (
		<PageWrapper>
			<h1>{year} Roster</h1>
			<h3>Leadership</h3>
			<div>
				{leadership!.map((member) => (
					<div>
						<GatsbyImage image={member!.gatsbyImageData!} alt={member!.title!} />
						{member!.description!.split('\n').map((line) => (
							<p>{line}</p>
						))}
					</div>
				))}
			</div>
			<h3>Members</h3>
			<div>
				{members!.map((member) => (
					<p>{member}</p>
				))}
			</div>
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.MembersPageQuery> = ({ data }) => (
	<title>{data.contentfulSeasonPage?.year} Roster | RobotX</title>
);
