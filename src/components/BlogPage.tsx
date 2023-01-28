import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { format } from 'date-fns';
import { formatString } from './BlogPost';

export const BlogPage: React.FC<PageProps<Queries.BlogPageQuery>> = ({ data }) => {
	const { nodes } = data.allContentfulBlogPost!;
	return (
		<main>
			<h1>Blog Archives</h1>
			<div>
				{nodes.map((post) => (
					<Link to={`/blog/${post.date}`}>
						<div>
							<h3>{post.title}</h3>
							<span>{format(new Date(post.date!), formatString)}</span>
							<p>{post.description?.description}</p>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
};

export const Head: HeadFC<Queries.BlogPageQuery> = ({ data }) => (
	<title>Blog Archives | RobotX</title>
);
