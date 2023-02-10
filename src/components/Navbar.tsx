import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { Icon } from './Icon';
import { FaBars } from 'react-icons/fa';

import * as styles from '../styles/Navbar.module.css';

interface NavItemProps {
	to: string;
	text: string;
	path?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, text, path }) => (
	<Link to={to} className={to === path ? styles.active : undefined}>
		{text}
	</Link>
);

interface NavbarProps {
	location: Location;
}

export const Navbar: React.FC<NavbarProps> = ({ location }) => {
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

	const [menuActive, setMenuActive] = useState(false);

	return (
		<div className={styles.navbar}>
			<nav>
				<Link to="/" className={styles.home}>
					<Icon dark />
				</Link>
				<div className={`${styles.items} ${menuActive ? styles.active : ''}`}>
					<NavItem to="/blog/" text="Blog" path={path} />
					<NavItem to={`/seasons/${currentSeason}/`} text={currentSeason!} path={path} />
					<NavItem to="/sponsors/" text="Sponsors" path={path} />
					<NavItem to="/seasons/" text="Seasons" path={path} />
					{allContentfulGlobalPage.nodes.map((page) => (
						<NavItem
							to={`/${page.slug}/`}
							text={page.title!}
							key={page.slug}
							path={path}
						/>
					))}
				</div>
				<div className={styles.hamburger} onClick={() => setMenuActive(!menuActive)}>
					<FaBars />
				</div>
			</nav>
		</div>
	);
};
