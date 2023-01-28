import React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';
import { format } from 'date-fns';

export const formatString = 'MMMM do, yyyy';

export const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
	const { title, content } = data.contentfulBlogPost!;
	return (
		<main>
			<h1>{title}</h1>
			<h3>{format(new Date(data.contentfulBlogPost?.date!), formatString)}</h3>
			<div>{renderRichText(content)}</div>
		</main>
	);
};

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => (
	<title>
		{data.contentfulBlogPost?.title} |{' '}
		{format(new Date(data.contentfulBlogPost?.date!), formatString)} | RobotX
	</title>
);
