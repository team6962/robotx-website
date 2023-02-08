import React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { Navbar } from './src/components/Navbar';
import { Footer } from './src/components/Footer';

import './src/styles/global.css';
import * as styles from './src/styles/browser.module.css';

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => {
	return (
		<div className={styles.wrapper}>
			<Navbar location={props.location} />
			<main>{element}</main>
			<Footer />
		</div>
	);
};
