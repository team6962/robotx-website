import type { NextPage } from 'next';
import Link from 'next/link';
import { ImageBackground } from '../components/imageBackground';
import teamPhoto from './home.png';

const Home: NextPage = () => (
	<div className="content-container">
		<ImageBackground
			src={teamPhoto}
			className="flex justify-center items-center"
			imageClassName="h-[50vh]"
			alt="Our team photo"
		>
			<img src="/robotx.svg" alt="RobotX 6962" className="h-[20vh]" />
		</ImageBackground>
		<p className="md:max-w-lg mx-6">
			FIRST Robotics Competition (
			<a href="https://www.firstinspires.org/robotics/frc" className="text-link">
				FRC
			</a>
			) team 6962, RobotX, was founded in 2018 at{' '}
			<a href="https://www.khanlabschool.org/" className="text-link">
				Khan Lab School
			</a>
			. As a team, our goal is to bring engineering and design experience and leadership
			skills to the students in our community. In the spirit of our host school, we aim to
			bring students of all ages together, lowering the age barrier to STEM education. In our
			first year of competition, we were awarded the Highest Rookie Seed award by FRC, and
			have only done more since.
		</p>
		<p className="md:max-w-lg mx-6">
			RobotX is a team of students from grades 6 through 12, based in Khan Lab School in
			Mountain View, California. Our team is a diverse group of STEM-passionate students,
			motivated to learn and succeed.
		</p>
		<Link href={`/seasons/${new Date().getFullYear()}/members`}>
			<a className="button">Meet our team members</a>
		</Link>
		<p className="md:max-w-lg mx-6">
			The 2022 season will be our fifth in FRC, and a return to in-person engineering and
			workshops. After last season, we&apos;re back in full force to make this year our best
			yet.
		</p>
		<Link href={`/seasons/${new Date().getFullYear()}`}>
			<a className="button">Keep up with the current season</a>
		</Link>
		<p className="md:max-w-lg mx-6">
			We couldn&apos;t do what we do without the backing of our generous sponsors and donors,
			and we&apos;re always looking for people to support our mission of bringing robotics
			education to our members.
		</p>
		<Link href="/donate">
			<a className="button">Learn about donation</a>
		</Link>
	</div>
);

export default Home;
