import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';
import { format } from 'date-fns';

import * as styles from '../styles/BlogPost.module.css';

export const formatString = 'MMMM do, yyyy';

export const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data, location }) => {
	const { title, content, date } = data.contentfulBlogPost!;

	// find next and prev posts
	const { nodes } = data.allContentfulBlogPost;
	const currentIndex = nodes.findIndex((post) => post.date === date);
	const prev = nodes[currentIndex + 1];
	const next = nodes[currentIndex - 1];

	return (
		<>
			<div className={styles.title}>
				<h1>{title}</h1>
				<h4>{format(new Date(data.contentfulBlogPost?.date!), formatString)}</h4>
			</div>
			<div className={styles.body}>{renderRichText(content)}</div>
			<div className={styles.controls}>
				{prev !== undefined ? (
					<Link to={`/blog/${prev.slug}`}>← {prev.title}</Link>
				) : (
					<span />
				)}
				{next !== undefined ? (
					<Link to={`/blog/${next.slug}`}>{next.title} →</Link>
				) : (
					<span />
				)}
			</div>
		</>
	);
};

export const Head: HeadFC<Queries.BlogPostQuery> = ({ data }) => (
	<title>
		{data.contentfulBlogPost?.title} |{' '}
		{format(new Date(data.contentfulBlogPost?.date!), formatString)} | RobotX
	</title>
);
