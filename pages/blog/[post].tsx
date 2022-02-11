import type { GetStaticPropsContext, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { readFileSync, readdirSync } from 'fs';
import Link from 'next/link';
import { format, parse, formatDistanceStrict, compareDesc, toDate } from 'date-fns';

const Home: NextPage<{
	markdown: string;
	title: string;
	date: number;
	next?: {
		date: number;
		path: string;
	};
	previous?: {
		date: number;
		path: string;
	};
}> = (props) => {
	const { markdown, title, next, previous } = props;
	const date = toDate(props.date);
	const nextDate = next ? toDate(next.date) : undefined;
	const previousDate = previous ? toDate(previous.date) : undefined;

	return (
		<div className="content-container my-4">
			<h1 className="text-center">{title}</h1>
			<div className="text-center">{format(date, 'EEEE, LLLL do, yyyy')}</div>
			<ReactMarkdown
				className="md:max-w-lg mx-6 post"
				components={{
					a: (props) => {
						return (
							<Link href={props.href!} passHref>
								<a {...props} target="_blank" rel="noopener noreferrer" />
							</Link>
						);
					}
				}}
			>
				{markdown}
			</ReactMarkdown>
			<div className="md:max-w-lg mx-6 w-full grid justify-between grid-cols-2">
				{previous && (
					<Link href={`/blog/${previous.path}`} passHref>
						<a>← Previous, {formatDistanceStrict(previousDate!, date)} ago</a>
					</Link>
				)}
				{next && (
					<Link href={`/blog/${next.path}`} passHref>
						<a className="col-start-2 text-right">
							Next, {formatDistanceStrict(date, nextDate!)} later →
						</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export async function getStaticPaths() {
	return {
		paths: readdirSync('pages/blog', {
			withFileTypes: true
		})
			.filter((file) => file.isDirectory())
			.sort((a, b) =>
				compareDesc(
					parse(a.name, 'yy-MM-dd', new Date()),
					parse(b.name, 'yy-MM-dd', new Date())
				)
			)
			.map((file) => ({ params: { post: file.name } })),
		fallback: false
	};
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const posts = readdirSync('pages/blog', {
		withFileTypes: true
	})
		.filter((file) => file.isDirectory())
		.sort((a, b) =>
			compareDesc(
				parse(a.name, 'yy-MM-dd', new Date()),
				parse(b.name, 'yy-MM-dd', new Date())
			)
		);
	const index = posts.findIndex((post) => post.name === context.params!.post);

	if (index === -1) return;

	const json = JSON.parse(readFileSync(`pages/blog/${context.params!.post}/post.json`, 'utf8'));
	const next =
		index > 0
			? {
					path: posts[index - 1].name,
					date: JSON.parse(
						readFileSync(`pages/blog/${posts[index - 1].name}/post.json`, 'utf8')
					).date
			  }
			: null;
	const previous =
		index < posts.length - 1
			? {
					path: posts[index + 1].name,
					date: JSON.parse(
						readFileSync(`pages/blog/${posts[index + 1].name}/post.json`, 'utf8')
					).date
			  }
			: null;

	return {
		props: {
			title: json.title,
			date: json.date,
			markdown: readFileSync(`pages/blog/${context.params!.post}/${json.file}`, 'utf8'),
			next,
			previous
		}
	};
}

export default Home;
