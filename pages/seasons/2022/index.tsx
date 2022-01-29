import type { NextPage } from 'next';
import { ImageBackground } from '../../../components/imageBackground';
import teamPhoto from './members/team.jpeg';

const Home: NextPage = () => (
    <div className="flex flex-col items-center gap-4">
        <ImageBackground
            src={teamPhoto}
            className="flex justify-center items-center"
            imageClassName="h-[50vh]"
        >
            <img src="/robotx.svg" alt="RobotX 6962" />
        </ImageBackground>
        <p className="md:max-w-lg mx-6">
            RobotX is a FRC team built of aspiring, STEM passionate students. We are based at the
            Khan Lab School in Mountain View, California where hands-on-learning and passion-driven
            work are encouraged. We aim to inspire and expose others to the exploration of science,
            mathematics, computer science, and technology; represent our self-driven school in FRC
            competitions; and share our experiences and knowledge with the rest of our community.
        </p>
    </div>
);

export default Home;
