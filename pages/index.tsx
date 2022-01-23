import type { NextPage } from 'next';
import { ImageBackground } from '../components/imageBackground';
import teamPhoto from './home.jpeg';

const Home: NextPage = () => (
    <div className="flex flex-col items-center gap-4">
        <ImageBackground
            src={teamPhoto}
            className="flex justify-center items-center"
            imageClassName="h-[50vh]"
        ></ImageBackground>
        <a href="/seasons/2022">View the current season</a>
        <a href="/seasons/2022/team">Meet our team</a>
        <a href="/sponsors">Learn about our sponsors</a>
    </div>
);

export default Home;
