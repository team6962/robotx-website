import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { format } from 'date-fns';
import { formatString } from './BlogPost';
import { PageWrapper } from './PageWrapper';

export const BlogArchive: React.FC<PageProps<Queries.BlogArchiveQuery>> = ({ data }) => {
	const { nodes } = data.allContentfulBlogPost!;
	return (
		<PageWrapper>
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
		</PageWrapper>
	);
};

export const Head: HeadFC<Queries.BlogArchiveQuery> = ({ data }) => (
	<title>Blog Archives | RobotX</title>
);
