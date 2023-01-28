import { graphql } from 'gatsby';
import { BlogPost, Head } from '../../components/BlogPost';

export const pageQuery = graphql`
	query BlogPost($slug: Date!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			date
			content {
				raw
				references {
					... on ContentfulAsset {
						contentful_id
						title
						description
						gatsbyImageData(width: 1400, quality: 100)
						__typename
					}
				}
			}
		}
		allContentfulBlogPost(sort: { date: DESC }) {
			nodes {
				title
				date
				slug
			}
		}
	}
`;

export default BlogPost;

export { Head };
