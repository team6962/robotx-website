import type { NextPage } from 'next';
import Link from 'next/link';
import { ImageBackground } from '../components/imageBackground';
import teamPhoto from './home.jpeg';

const Home: NextPage = () => (
    <div className="flex flex-col items-center gap-4">
        <ImageBackground
            src={teamPhoto}
            className="flex justify-center items-center"
            imageClassName="h-[50vh]"
        >
            <img src="/robotx.svg" alt="RobotX 6962" className="h-[20vh]" />
        </ImageBackground>
        <p className="md:max-w-lg mx-6">
            RobotX is a FRC team built of aspiring, STEM passionate students. We are based at the
            Khan Lab School in Mountain View, California where hands-on-learning and passion-driven
            work are encouraged. We aim to inspire and expose others to the exploration of science,
            mathematics, computer science, and technology; represent our self-driven school in FRC
            competitions; and share our experiences and knowledge with the rest of our community.
        </p>
        <p className="md:max-w-lg mx-6">
            RobotX is a team of young and aspiring students, from grades 6 through 12, based in Khan
            Lab School in Mountain View, California. Our team is a diverse group of STEM-passionate
            students, motivated to learn and succeed.
        </p>
        <Link href={`/seasons/${new Date().getFullYear()}/members`}>
            <a className="button">Meet our members</a>
        </Link>
        <p className="md:max-w-lg mx-6">
            The 2022 season will be our fifth in FRC, and our return to in-person engineering and
            workshops. After our last season, we&apos;re back in full force to make this year our
            best yet.
        </p>
        <Link href={`/seasons/${new Date().getFullYear()}`}>
            <a className="button">Keep up with the current season</a>
        </Link>
        <p className="md:max-w-lg mx-6">
            We couldn&apos;t do what we do without the backing of our gracious sponsors and donors,
            and we&apos;re always looking for people who would be so generous as to support our
            mission of bringing robotics education to our aspiring members.
        </p>
        <Link href="/sponsors">
            <a className="button">Learn about donation</a>
        </Link>
    </div>
);

export default Home;
