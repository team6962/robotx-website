import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import donate from './donate.jpg';

const Home: NextPage = () => (
    <div className="content-container my-4">
        <p className="md:max-w-lg mx-6">
            At RobotX, our goal isn&apos;t just to win, but also to spread our passion for the
            fields of science, engineering, and math. This year, we
            aim to raise $35,000 and we hope that you and your organization can assist us in meeting this goal. Your
            tax-deductible contribution will go not only towards directly funding our team, but also
            symbolize your support for the long-term investment in young and aspiring students. We greatly
            appreciate any and all contributions. If you would like to learn about corporate
            sponsorship for RobotX, please consult our{' '}
            <Link href="/sponsors">
                <a className="text-link">Sponsors page</a>
            </Link>
            .
        </p>
        <a href="https://khanlabschool.square.site/#wHgVCy" className="button">
            Donate
        </a>
        <div className="md:max-w-lg">
            <Image
                src={donate}
                layout="intrinsic"
                className="rounded"
                priority
                placeholder="blur"
                alt="Our team coming together to test a prototype"
            ></Image>
        </div>
        <p className="md:max-w-lg mx-6">
            RobotX is a student club of Khan Lab School, a 501(c)(3) organization. Donations may be 
			made to Khan Lab School with a designation for &quot;RobotX, Team 6962&quot;.
        </p>
    </div>
);

export default Home;
