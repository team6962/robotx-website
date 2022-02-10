import { getStaticPaths } from './[post]';
import { parse, compareDesc } from 'date-fns';
import { NextPage } from 'next';

const Home: NextPage = () => <></>;

export const getStaticProps = async () => {
	const paths = (await getStaticPaths()).paths.sort((a, b) =>
		compareDesc(
			parse(a.params.post, 'yy-MM-dd', new Date()),
			parse(b.params.post, 'yy-MM-dd', new Date())
		)
	);

	return {
		redirect: {
			destination: `/blog/${paths[0].params.post}`,
			permanent: false
		}
	};
};

export default Home;
