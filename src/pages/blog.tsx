import { graphql } from 'gatsby';
import { BlogArchive, Head } from '../components/BlogArchive';

export const pageQuery = graphql`
	query BlogArchive {
		allContentfulBlogPost(sort: { date: DESC }) {
			nodes {
				title
				date
				description {
					description
				}
			}
		}
	}
`;

export default BlogArchive;

export { Head };
