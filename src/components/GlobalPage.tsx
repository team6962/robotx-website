import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';

export const GlobalPage: React.FC<PageProps<Queries.GlobalPageQuery>> = ({ data, location }) => {
	const { title, content } = data.contentfulGlobalPage!;
	return (
		<>
			<style>
  			@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200&display=swap');
			</style>
			<h1>{title}</h1>
			<div>{renderRichText(content)}</div>
		</>
	);
};

export const Head: HeadFC<Queries.GlobalPageQuery> = ({ data }) => (
	<title>{data.contentfulGlobalPage?.title} | Antares</title>
);
