import { graphql } from 'gatsby';
import { BlogPage, Head } from '../components/BlogPage';

export const pageQuery = graphql`
	query BlogPage {
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

export default BlogPage;

export { Head };
