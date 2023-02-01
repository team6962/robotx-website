import { graphql } from 'gatsby';
import { Head, SeasonPage } from '../../components/SeasonPage';

export const pageQuery = graphql`
	query SeasonPage($year: Date!) {
		contentfulSeasonPage(year: { eq: $year }) {
			year
			gameTitle
			content {
				raw
				# references {
				# 	... on ContentfulAsset {
				# 		contentful_id
				# 		title
				# 		description
				# 		gatsbyImageData(width: 1400, quality: 100)
				# 		__typename
				# 	}
				# }
			}
		}
	}
`;

export default SeasonPage;

export { Head };
