import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col gap-8">
            <h1>
                <img src="/robotx.svg" alt="FRC Team 6962: RobotX" className="w-100" />
            </h1>
            <p>
                RobotX is a FRC team of aspiring, STEM passionate students. We&apos;re based in Khan
                Lab School, in Mountain View, California where hands-on-learning and passion-driven
                work are encouraged. We aim to inspire and expose others to the exploration of
                science, mathematics, computer science, and technology; represent our self-driven
                school in FRC competitions; and share our experiences and knowledge with the rest of
                our community.
            </p>
        </div>
    );
};

export default Home;
