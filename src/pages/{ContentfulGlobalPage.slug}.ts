import { graphql } from 'gatsby';
import { GlobalPage, Head } from '../components/GlobalPage';

export const pageQuery = graphql`
	fragment GlobalPageData on ContentfulGlobalPage {
		id
		title
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

	query GlobalPage($slug: String!) {
		contentfulGlobalPage(slug: { eq: $slug }) {
			...GlobalPageData
		}
	}
`;

export default GlobalPage;

export { Head };
