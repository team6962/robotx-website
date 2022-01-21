import type { NextPage } from 'next';
import { ImageBackground } from '../components/imageBackground';
import teamPhoto from '../images/team-home.jpeg';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <ImageBackground
                src={teamPhoto}
                className="flex justify-center items-center"
                imageClassName="h-[50vh]"
            >
                <p className="md:max-w-lg background rounded p-2">test test 12 13</p>
            </ImageBackground>
        </div>
    );
};

export default Home;
