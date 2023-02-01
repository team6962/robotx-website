import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';
import { format } from 'date-fns';
import { PageWrapper } from './PageWrapper';

import * as styles from '../styles/BlogPost.module.css';

export const formatString = 'MMMM do, yyyy';

export const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
	const { title, content, date } = data.contentfulBlogPost!;

	// find next and prev posts
	const { nodes } = data.allContentfulBlogPost;
	const currentIndex = nodes.findIndex((post) => post.date === date);
	const prev = nodes[currentIndex + 1];
	const next = nodes[currentIndex - 1];

	return (
		<PageWrapper>
			<h1>{title}</h1>
			<h3>{format(new Date(data.contentfulBlogPost?.date!), formatString)}</h3>
			<div>{renderRichText(content)}</div>
			<div className={styles.controls}>
				{prev !== undefined ? (
					<Link to={`/blog/${prev.slug}`} className={styles.prev}>
						← {prev.title}
					</Link>
				) : null}
				{next !== undefined ? (
					<Link to={`/blog/${next.slug}`} className={styles.next}>
						{next.title} →
					</Link>
				) : null}
			</div>
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => (
	<title>
		{data.contentfulBlogPost?.title} |{' '}
		{format(new Date(data.contentfulBlogPost?.date!), formatString)} | RobotX
	</title>
);
