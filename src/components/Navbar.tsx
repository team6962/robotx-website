import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from './Icon';

import * as styles from '../styles/Navbar.module.css';

interface LocationProps {
	location: Location;
}

export const Navbar: React.FC<LocationProps> = ({ location }) => {
	const { allContentfulGlobalPage, allContentfulSeasonPage } =
		useStaticQuery<Queries.NavbarQuery>(graphql`
			query Navbar {
				allContentfulGlobalPage(filter: { homepage: { eq: false } }) {
					nodes {
						title
						slug
					}
				}
				allContentfulSeasonPage(sort: { year: DESC }, limit: 1) {
					nodes {
						year
					}
				}
			}
		`);

	const currentSeason = allContentfulSeasonPage.nodes[0].year;

	const path = location.pathname;

	return (
		<div className={styles.navbar}>
			<nav>
				<Link to="/">
					<Icon dark />
				</Link>
				<Link to="/blog/" className={'/blog/' === path ? styles.active : undefined}>
					<span>Blog</span>
				</Link>
				<Link
					to={`/seasons/${currentSeason}/`}
					className={`/seasons/${currentSeason}/` === path ? styles.active : undefined}
				>
					<span>{currentSeason}</span>
				</Link>
				<Link to="/sponsors/" className={'/sponsors/' === path ? styles.active : undefined}>
					<span>Sponsors</span>
				</Link>
				<Link to="/seasons/" className={'/seasons/' === path ? styles.active : undefined}>
					<span>Seasons</span>
				</Link>
				{allContentfulGlobalPage.nodes.map((page) => (
					<Link
						to={`/${page.slug}/`}
						key={page.slug}
						className={`/${page.slug}/` === path ? styles.active : undefined}
					>
						<span>{page.title}</span>
					</Link>
				))}
			</nav>
		</div>
	);
};
