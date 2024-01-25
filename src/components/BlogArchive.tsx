import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { format } from 'date-fns';
import { formatString } from './BlogPost';

import * as styles from '../styles/BlogArchive.module.css';

export const BlogArchive: React.FC<PageProps<Queries.BlogArchiveQuery>> = ({ data, location }) => {
	const { nodes } = data.allContentfulBlogPost!;
	return (
		<>
			<h1>Blog Archives</h1>
			<div className={styles.archive}>
				{nodes.map((post) => (
					<Link to={`/blog/${post.date}`} className={styles.post}>
						<div>
							<h3>{post.title}</h3>
							<h5>{format(new Date(post.date!), formatString)}</h5>
						</div>
						<p>{post.description?.description}</p>
					</Link>
				))}
			</div>
		</>
	);
};

export const Head: HeadFC<Queries.BlogArchiveQuery> = () => <title>Blog Archives | Antares</title>;
