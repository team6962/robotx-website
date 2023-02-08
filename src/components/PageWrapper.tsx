import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import * as styles from '../styles/PageWrapper.module.css';

export interface PageWrapperProps {
	children: ReactNode;
	location: Location;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, location }) => (
	<div className={styles.wrapper}>
		<Navbar location={location} />
		<main>{children}</main>
		<Footer />
	</div>
);
