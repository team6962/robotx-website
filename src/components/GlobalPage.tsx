import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';

export const GlobalPage: React.FC<PageProps<Queries.GlobalPageQuery>> = ({ data }) => {
	const { title, content } = data.contentfulGlobalPage!;
	return (
		<main>
			<h1>{title}</h1>
			<div>{renderRichText(content)}</div>
		</main>
	);
};

export const Head: HeadFC<Queries.GlobalPageQuery> = ({ data }) => (
	<title>{data.contentfulGlobalPage?.title} | RobotX</title>
);
