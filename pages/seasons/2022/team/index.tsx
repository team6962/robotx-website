import type { NextPage } from 'next';
import { ImageBackground } from '../../../../components/imageBackground';
import { LeaderCard as Card } from '../../../../components/leaderCard';

import teamPhoto from './team.jpeg';

import aditij from './portraits/aditij.jpg';
import ainself from './portraits/ainself.jpg';
import alishaf from './portraits/alishaf.jpg';
import amartyai from './portraits/amartyai.jpg';
import ananyak from './portraits/ananyak.jpg';
import angelicaz from './portraits/angelicaz.jpg';
import arjunc from './portraits/arjunc.jpg';
import ishanshk from './portraits/ishanshk.jpg';
import jayw from './portraits/jayw.jpg';
import meganc from './portraits/meganc.jpg';
import poojap from './portraits/poojap.jpg';
import robertb from './portraits/robertb.jpg';
import sharanyan from './portraits/sharanyan.jpg';
import simonc from './portraits/simonc.jpg';
import sitav from './portraits/sitav.jpg';
import sophiad from './portraits/sophiad.jpg';
import sorenw from './portraits/sorenw.jpg';
import sylvanc from './portraits/sylvanc.jpg';
import timothyc from './portraits/timothyc.jpg';
import vivekp from './portraits/vivekp.jpg';

export const Leadership = () => (
    <div className="md:max-w-lg mx-6 grid grid-cols-2 gap-4">
        <Card name="Angelica Z" title="Team Captain" src={angelicaz} />
        <Card name="Timothy C" title="Team Captain" src={timothyc} />
        <Card name="Pooja P" title="Operations Lead" src={poojap} />
        <Card name="Alisha F" title="Inventory and Tools Manager" src={alishaf} />
        <Card name="Sharanya N" title="Safety Captain" src={sharanyan} />
        <Card name="Ainsel F" title="Safety Captain" mentor src={ainself} />
        <Card name="Megan C" title="Design and Prototyping Lead" src={meganc} />
        <Card name="Vivek P" title="Design and Prototyping Lead" mentor src={vivekp} />
        <Card name="Sophia M" title="Build and Testing Lead" src={sophiad} />
        <Card name="Sylvan C" title="Build and Testing Lead" mentor src={sylvanc} />
        <Card name="Simon C" title="CAD Lead" src={simonc} />
        <Card name="Amartya I" title="Programming and Electronics Lead" src={amartyai} />
        <Card name="Robert B" title="Programming and Electronics Lead" mentor src={robertb} />
        <Card name="Ishansh K" title="Programming Manager" src={ishanshk} />
        <Card name="Ananya K" title="Electronics Manager" src={ananyak} />
        <Card name="Timothy C" title="Business and Finance Lead" src={timothyc} />
        <Card name="Arjun C" title="Business and Finance Lead" mentor src={arjunc} />
        <Card name="Sita V" title="Marketing and Communications Lead" src={sitav} />
        <Card name="Angelica Z" title="Marketing and Communications Lead" mentor src={angelicaz} />
        <Card name="Aditi J" title="Communications and Outreach Manager" src={aditij} />
        <Card name="Jay W" title="Web Development Manager" src={jayw} />
        <Card name="Soren W" title="Web Development Manager" src={sorenw} />
        <Card name="Arjun C" title="Awards Manager" src={arjunc} />
    </div>
);

const Home: NextPage = () => (
    <div className="flex flex-col items-center gap-4">
        <ImageBackground
            src={teamPhoto}
            className="flex justify-center items-center"
            imageClassName="h-[50vh]"
        >
            {/* <p className="md:max-w-lg background text-lg font-semibold rounded p-2">
                Meet Our 2022 Team
            </p> */}
        </ImageBackground>
        <p className="md:max-w-lg mx-6">
            RobotX is a FRC team built of aspiring, STEM passionate students. We are based at the
            Khan Lab School in Mountain View, California where hands-on-learning and passion-driven
            work are encouraged. We aim to inspire and expose others to the exploration of science,
            mathematics, computer science, and technology; represent our self-driven school in FRC
            competitions; and share our experiences and knowledge with the rest of our community.
        </p>
        <Leadership />
    </div>
);

export default Home;
