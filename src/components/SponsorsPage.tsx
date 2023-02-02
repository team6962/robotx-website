import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { PageWrapper } from './PageWrapper';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from '../styles/SponsorsPage.module.css';

interface TierProps {
	tierName: string;
	nodes: Queries.SponsorsQuery['allContentfulSponsor']['nodes'];
	titleComponent: 'h2' | 'h4' | 'p';
}

const Tier: React.FC<TierProps> = ({ tierName, nodes, titleComponent }) =>
	nodes.find((node) => node.tier === tierName) !== undefined ? (
		<div className={styles.tier}>
			<h3>{tierName}</h3>
			<div className={styles.sponsors}>
				{nodes
					.filter((node) => node.tier === tierName)
					.map((node) => {
						if (node.logo !== null && node.logo?.gatsbyImageData !== null)
							return (
								<GatsbyImage
									image={node.logo?.gatsbyImageData!}
									alt={node.name!}
									className={`${styles.image} ${
										tierName in styles ? styles[tierName] : ''
									}`}
									objectFit="contain"
								/>
							);
						if (node.logo !== null && node.logo?.url !== null)
							return (
								<img
									src={node.logo?.url!}
									alt={node.name!}
									className={`${styles.image} ${
										tierName in styles ? styles[tierName] : ''
									}`}
								/>
							);
						if (titleComponent === 'h2')
							return (
								<h2 className={tierName in styles ? styles[tierName] : ''}>
									{node.name}
								</h2>
							);
						if (titleComponent === 'h4')
							return (
								<h4 className={tierName in styles ? styles[tierName] : ''}>
									{node.name}
								</h4>
							);
						if (titleComponent === 'p')
							return (
								<p className={tierName in styles ? styles[tierName] : ''}>
									{node.name}
								</p>
							);
					})}
			</div>
		</div>
	) : null;

export const SponsorsPage: React.FC<PageProps<Queries.SponsorsQuery>> = ({ data }) => {
	const { nodes } = data.allContentfulSponsor;
	console.log(nodes);
	return (
		<PageWrapper>
			<h1>Sponsors</h1>
			<div className={styles.tiers}>
				<Tier nodes={nodes} tierName="Xtragalactic" titleComponent="h2" />
				<Tier nodes={nodes} tierName="Xtraordinary" titleComponent="h4" />
				<Tier nodes={nodes} tierName="Xceptional" titleComponent="p" />
				<Tier nodes={nodes} tierName="Xcellent" titleComponent="p" />
			</div>
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.SponsorsQuery> = () => <title>Sponsors | RobotX</title>;
