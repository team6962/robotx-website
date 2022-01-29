import type { NextPage } from 'next';
import Link from 'next/link';
import { ImageBackground } from '../../../components/imageBackground';
import teamPhoto from './home.jpg';

const Home: NextPage = () => (
    <div className="content-container">
        <ImageBackground
            src={teamPhoto}
            className="flex justify-center items-center"
            imageClassName="h-[50vh]"
        ></ImageBackground>
        <p className="md:max-w-lg mx-6">
            In our fifth season as a team, we&apos;re returning to in-person meets and competition
            with this year&apos;s game: Rapid React. With our newly-expanded team, we&apos;re
            excited to put the skills we&apos;ve developed in our off-season workshops to the test.
            We&apos;re experimenting with new techniques and technologies this season, and are
            excited to share our progress with you!
        </p>
        <p className="md:max-w-lg mx-6">
            As the season continues, we will continue to update this page with more information and
            posts.
        </p>
        <Link href={`/seasons/${new Date().getFullYear()}/members`}>
            <a className="button">Meet our 2022 team</a>
        </Link>
    </div>
);

export default Home;
