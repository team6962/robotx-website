import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';
import { PageWrapper } from './PageWrapper';

export const GlobalPage: React.FC<PageProps<Queries.GlobalPageQuery>> = ({ data, location }) => {
	const { title, content } = data.contentfulGlobalPage!;
	return (
		<PageWrapper location={location}>
			<h1>{title}</h1>
			<div>{renderRichText(content)}</div>
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.GlobalPageQuery> = ({ data }) => (
	<title>{data.contentfulGlobalPage?.title} | RobotX</title>
);
