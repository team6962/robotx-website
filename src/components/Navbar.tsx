import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Icon } from './Icon';

import * as styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
	const { allContentfulGlobalPage } = useStaticQuery<Queries.NavbarQuery>(graphql`
		query Navbar {
			allContentfulGlobalPage(filter: { homepage: { eq: false } }) {
				nodes {
					title
					slug
				}
			}
		}
	`);

	return (
		<nav className={styles.navbar}>
			<Link to="/">
				<Icon />
			</Link>
			<Link to="/blog">
				<span>Blog</span>
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
	);
};
