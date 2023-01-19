import { graphql } from 'gatsby';
import { Head, MembersPage } from '../../../components/MembersPage';

export const pageQuery = graphql`
	query MembersPage($year: Date!) {
		contentfulSeasonPage(year: { eq: $year }) {
			year
			leadership {
				... on ContentfulAsset {
					contentful_id
					title
					description
					gatsbyImageData(width: 500, quality: 100)
					__typename
				}
			}
			members
		}
	}
`;

export default MembersPage;

export { Head };
