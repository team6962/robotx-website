import React from 'react';
import { graphql } from 'gatsby';
import { GlobalPage } from '../components/GlobalPage';

export const pageQuery = graphql`
	query Index {
		contentfulGlobalPage(homepage: { eq: true }) {
			...GlobalPageData
		}
	}
`;

export default GlobalPage;

export const Head = () => <title>RobotX</title>;
