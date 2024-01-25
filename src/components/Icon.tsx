import React from 'react';

import * as styles from '../styles/Icon.module.css';

export interface IconProps {
	inverted?: boolean;
	dark?: boolean;
}

export const Icon: React.FC<IconProps> = ({ inverted = true, dark = false }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.27 388.14">
		<path className={styles.outer} d="m301.27,194.07c-124.05,18.91-135.96,34.25-150.64,194.07C135.96,228.32,124.05,212.99,0,194.07,124.05,175.16,135.96,159.82,150.64,0c14.68,159.82,26.58,175.16,150.64,194.07Z" />
	</svg>
);
