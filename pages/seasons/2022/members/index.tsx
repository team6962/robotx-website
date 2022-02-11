import type { NextPage } from 'next';
import { ImageBackground } from '../../../../components/imageBackground';
import { LeaderCard as Card } from '../../../../components/leaderCard';

import teamPhoto from './team.png';

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
import sreev from './portraits/sreev.jpg';
import sylvanc from './portraits/sylvanc.jpg';
import timothyc from './portraits/timothyc.jpg';
import vivekp from './portraits/vivekp.jpg';

const Home: NextPage = () => (
	<div className="content-container">
		<ImageBackground
			src={teamPhoto}
			className="flex justify-center items-center"
			imageClassName="h-[50vh]"
			alt="Our team photo"
		>
			{/* <p className="md:max-w-lg background text-lg font-semibold rounded p-2">
                Meet Our 2022 Team
            </p> */}
		</ImageBackground>
		<p className="md:max-w-lg mx-6">
			RobotX is a group of students aged 11 to 18 from Khan Lab School in Mountain View,
			California. In the spirit of our school&apos;s founder, Sal Khan, we greatly value
			education and teaching our members valuable practical and life skills. Our team of
			dedicated students put in over 16 hours a week into our team&apos;s many in-season
			responsibilities. All of our members are highly passionate, driven workers integral to
			our team&apos;s success.
		</p>
		<p>Our Leadership</p>
		<div className="md:max-w-lg mx-6 grid grid-cols-2 gap-4">
			<Card name="Angelica Z" title="Team Captain" src={angelicaz} />
			<Card name="Timothy C" title="Team Captain" src={timothyc} />
			<Card name="Pooja P" title="Operations Lead" src={poojap} />
			<Card name="Alisha F" title="Inventory Manager" src={alishaf} />
			<Card name="Sree V" title="Tools Manager" src={sreev} />
			<Card name="Sharanya N" title="Safety Captain" src={sharanyan} />
			<Card name="Ainsel F" title="Safety Captain" mentor src={ainself} />
			<Card name="Megan C" title="Design and Prototyping Lead" src={meganc} />
			<Card name="Vivek P" title="Design and Prototyping" mentor src={vivekp} />
			<Card name="Sophia M" title="Build and Testing Lead" src={sophiad} />
			<Card name="Sylvan C" title="Build and Testing" mentor src={sylvanc} />
			<Card name="Simon C" title="CAD Lead" src={simonc} />
			<Card name="Amartya I" title="Programming and Electronics Lead" src={amartyai} />
			<Card name="Robert B" title="Programming and Electronics" mentor src={robertb} />
			<Card name="Ishansh K" title="Programming Manager" src={ishanshk} />
			<Card name="Ananya K" title="Electronics Manager" src={ananyak} />
			<Card name="Timothy C" title="Business and Finance Lead" src={timothyc} />
			<Card name="Arjun C" title="Business and Finance Lead" mentor src={arjunc} />
			<Card name="Sita V" title="Marketing and Communications" src={sitav} />
			<Card name="Angelica Z" title="Marketing and Communications" mentor src={angelicaz} />
			<Card name="Aditi J" title="Communications and Outreach Manager" src={aditij} />
			<Card name="Jay W" title="Web Development Manager" src={jayw} />
			<Card name="Soren W" title="Web Development Manager" src={sorenw} />
			<Card name="Arjun C" title="Awards Manager" src={arjunc} />
		</div>
		<p>Our Team</p>
		<div className="max-w-lg mx-6 grid grid-cols-fill gap-x-4">
			<p>Aaryuj B.</p>
			<p>Adam S.</p>
			<p>Aditi J.</p>
			<p>Ainsel F.</p>
			<p>Alisha F.</p>
			<p>Amartya I.</p>
			<p>Ananya K.</p>
			<p>Angelica Z.</p>
			<p>Anjali A.</p>
			<p>Anvesha K.</p>
			<p>Arjun A.</p>
			<p>Arjun C.</p>
			<p>Aryan P.</p>
			<p>Charlie K.</p>
			<p>Evan P.</p>
			<p>Gregory G.</p>
			<p>Imran K.</p>
			<p>Ishansh K.</p>
			<p>Jack K.</p>
			<p>Jay W.</p>
			<p>Kingston B.</p>
			<p>Kunaal I.</p>
			<p>Lauren W.</p>
			<p>Logan M.</p>
			<p>Megan C.</p>
			<p>Miguel M.</p>
			<p>Nihal V.</p>
			<p>Peter W.</p>
			<p>Pooja P.</p>
			<p>Rafael F.</p>
			<p>Raine M.</p>
			<p>Robert B.</p>
			<p>Roham A.</p>
			<p>Ryan Q.</p>
			<p>Sebastian D.</p>
			<p>Seerat D.</p>
			<p>Sharanya N.</p>
			<p>Shira S.</p>
			<p>Simon C.</p>
			<p>Sita V.</p>
			<p>Sophia D.</p>
			<p>Sophie F.</p>
			<p>Soren W.</p>
			<p>Sree V.</p>
			<p>Sylvan C.</p>
			<p>Timothy C.</p>
			<p>Varin S.</p>
			<p>Vidit K.</p>
			<p>Vikram S.</p>
			<p>Vishnu M.</p>
			<p>Vivek P.</p>
			<p>Zavier M.</p>
			<p>Zorez S.</p>
		</div>
	</div>
);

export default Home;
