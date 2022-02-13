import type { NextPage } from 'next';
import powerPhoto from './home2.jpeg';
import Image from 'next/image';

const SponsorshipLevel = ({
	name,
	condition,
	benefits
}: {
	name: string;
	condition: string;
	benefits: string[];
}) => (
	<div className="md:w-[20rem] px-6 md:px-0 flex flex-col gap-2 mt-2">
		<span className="self-center flex gap-2">
			<h3 className="text-lg">{name}</h3>
			<span className="before:content-['-']" />
			<p>{condition}</p>
		</span>
		<ul className="flex flex-col gap-1">
			{benefits.map((benefit, i) => (
				<li key={i}>{benefit}</li>
			))}
		</ul>
	</div>
);

const Home: NextPage = () => (
	<div className="content-container my-4">
		<p className="md:max-w-lg mx-6">
			At RobotX, our goal isn&apos;t just to win, but also to spread our passion for the
			fields of science, engineering, and math to the students in our community. This year we
			aim to raise $20,500 and we hope that you can assist us in meeting this goal. Your
			tax-deductible contribution will go not only towards directly funding our team, but also
			symbolize your support for the long-term investment in our students. We would also
			appreciate in-kind donations, such as access to workshops, tools, or other goods and
			services. Additionally, sponsors receive rewards (see below) and updates on the
			team&apos;s progress and details on the robotics experience.
		</p>
		<p className="md:max-w-lg mx-6">
			Our sponsors are featured prominently on our robot, website, team merchandise, and more.
			They are worn and brought to all events and competitions for peers, other teams,
			spectators, and judges to view.
		</p>
		<p className="md:max-w-lg mx-6">
			We are always looking for sponsors to support our team and to help us grow. If you, as
			an organization, are interested in becoming a sponsor, feel free get in touch with us at{' '}
			<a href="mailto:contact@team6962.com" className="text-link">
				contact@team6962.com
			</a>
			.
		</p>
		<a href="/2022 RobotX Sponsor Packet.pdf" className="button">
			2022 Sponsor Information Packet
		</a>
		<p className="md:max-w-lg mx-6">
			RobotX is a student club of Khan Lab School, a 501(c)(3) organization. Donations may be
			made to Khan Lab School with a designation for RobotX, Team 6962.
		</p>
		<h2>Sponsorship Levels</h2>
		<SponsorshipLevel
			name="Xcellent"
			condition="Up to $100"
			benefits={[
				'Website: Business Name',
				'Marketing Packet: Business Name',
				'Thank You Letter and Gift'
			]}
		/>
		<SponsorshipLevel
			name="Xceptional"
			condition="Up to $500"
			benefits={[
				'Website: Business Name',
				'Marketing Packet: Business Name',
				'Marketing Video: Business Name',
				'Thank You Letter and Gift'
			]}
		/>
		<SponsorshipLevel
			name="Xemplary"
			condition="Up to $1000"
			benefits={[
				'Website: Business Name and Small Logo',
				'Marketing Packet: Business Name',
				'Marketing Video: Business Name',
				'Thank You Letter and Gift'
			]}
		/>
		<SponsorshipLevel
			name="Xtraordinary"
			condition="Up to $2500"
			benefits={[
				'Website: Business Name and Big Logo',
				'Marketing Packet: Business Name',
				'Marketing Video: Business Name',
				'Team Shirt: Logo',
				'Thank You Letter and Gift'
			]}
		/>
		<SponsorshipLevel
			name="Xtragalactic"
			condition="Over $2500"
			benefits={[
				'Website: Business Name and Big Logo',
				'Marketing Packet: Business Name',
				'Marketing Video: Business Name',
				'Team Shirt: Logo',
				'Robot: Logo',
				'Thank You Letter and Gift'
			]}
		/>
	</div>
);

export default Home;
