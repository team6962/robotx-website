import { graphql } from 'gatsby';
import { Head, SponsorsPage } from '../components/SponsorsPage';

export const pageQuery = graphql`
	query Sponsors {
		allContentfulSponsor {
			nodes {
				name
				tier
				logo {
					url
					gatsbyImageData(width: 500, quality: 100)
				}
			}
		}
	}
`;

export default SponsorsPage;

export { Head };
