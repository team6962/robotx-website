import { graphql } from 'gatsby';
import { Head, SeasonArchive } from '../components/SeasonArchive';

export const pageQuery = graphql`
	query SeasonArchive {
		allContentfulSeasonPage(sort: { year: DESC }) {
			nodes {
				year
				gameTitle
				thumbnail {
					gatsbyImageData(width: 1400, quality: 100)
				}
			}
		}
	}
`;

export default SeasonArchive;

export { Head };
