import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from './Icon';

import * as styles from '../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
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

	return (
		<div className={styles.navbar}>
			<nav>
				<Link to="/">
					<Icon dark />
				</Link>
				<Link to="/blog">
					<span>Blog</span>
				</Link>
				<Link to={`/seasons/${currentSeason}`}>
					<span>{currentSeason}</span>
				</Link>
				<Link to="/sponsors">
					<span>Sponsors</span>
				</Link>
				<Link to="/seasons">
					<span>Seasons</span>
				</Link>
				{allContentfulGlobalPage.nodes.map((page) => (
					<Link to={`/${page.slug}`} key={page.slug}>
						<span>{page.title}</span>
					</Link>
				))}
			</nav>
		</div>
	);
};
