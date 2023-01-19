import { Icon } from './icon';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarLink = ({ href, text }: { href: string; text: string }) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<div className="px-2 rounded">
			<Link href={href} passHref>
				<a className={isActive ? 'text-accent' : 'hover:text-accent text'}>{text}</a>
			</Link>
		</div>
	);
};

const Navbar = () => {
	const [hidden, setHidden] = useState(true);

	return (
		<header className="w-screen flex justify-center background-accent">
			<a
				className="p-2 rounded-b bg-zinc-700 left-4 absolute -translate-y-10 transition-transform focus:translate-y-0"
				href="#main-content"
			>
				Skip to main content
			</a>

			<div className="md:max-w-lg flex flex-grow flex-col md:flex-row justify-between items-stretch green p-2 gap-y-2">
				<div className="grid grid-cols-3 md:flex justify-between">
					<button className="md:hidden" onClick={() => setHidden(!hidden)}>
						<FaBars size={24} />
					</button>

					<div className="justify-self-center">
						<Link href="/" passHref>
							<a>
								<Icon className="h-8" />
							</a>
						</Link>
					</div>
				</div>

				<nav
					className={`${
						hidden ? 'hidden md:flex' : 'flex'
					} flex-col md:flex-row items-stretch md:items-center gap-x-6 gap-y-2`}
				>
					<NavbarLink
						href={`/seasons/${new Date().getFullYear()}/members`}
						text="Members"
					/>
					<NavbarLink href="/blog" text="Blog" />
					{/* <NavbarLink href="/seasons" text="Seasons" /> */}
					<NavbarLink href="/seasons/2022" text="2022" />
					<NavbarLink href="/sponsors" text="Sponsors" />
					<NavbarLink href="/donate" text="Donate" />
				</nav>
			</div>
		</header>
	);
};

export { Navbar };
