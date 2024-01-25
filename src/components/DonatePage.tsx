import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { renderRichText } from '../util/renderRichText';
import { format } from 'date-fns';
import * as styles from "./BlogPost.module.css";

export const formatString = 'MMMM do, yyyy';

export const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
	const { title, content, date } = data.contentfulBlogPost!;

	// find next and prev posts
	const { nodes } = data.allContentfulBlogPost;
	const currentIndex = nodes.findIndex((post) => post.date === date);
	const prev = nodes[currentIndex - 1];
	const next = nodes[currentIndex + 1];

	return (
		<>
			<div className={styles.BlogPost}>
				<h1>{title}</h1>
				<h3>{format(new Date(data.contentfulBlogPost?.date!), formatString)}</h3>
				<div>{renderRichText(content)}</div>
				<div>
					{prev !== undefined ? (
						<Link to={`/blog/${prev.slug}`}>
							<div>
								<p>{prev.title}</p>
								<p>{format(new Date(prev.date!), formatString)}</p>
							</div>
						</Link>
					) : null}
					{next !== undefined ? (
						<Link to={`/blog/${next.slug}`}>
							<div>
								<p>{next.title}</p>
								<p>{format(new Date(next.date!), formatString)}</p>
							</div>
						</Link>
					) : null}
				</div>
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
