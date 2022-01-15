import { Logo } from './logo';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const NavbarLink = ({ href, text }: { href: string; text: string }) => {
    return (
        <li className="px-2 rounded bg-zinc-700 md:bg-inherit">
            <Link href={href} passHref>
                <a>{text}</a>
            </Link>
        </li>
    );
};

const Navbar = () => {
    const [hidden, setHidden] = useState(true);

    return (
        <header className="w-screen mx-auto flex justify-center bg-zinc-800">
            <a
                className="p-2 rounded-b bg-zinc-600 left-4 absolute -translate-y-10 transition-transform focus:translate-y-0 focus:outline-none"
                href="#main-content"
            >
                Skip navigation
            </a>

            <div className="max-w-xxs md:max-w-md lg:max-w-lg xl:max-w-xl flex-grow flex flex-col md:flex-row justify-between items-stretch green py-2 gap-4 text-white">
                <div className="flex flex-grow justify-between">
                    <Link href="/" passHref>
                        <a>
                            <Logo className="h-8" />
                        </a>
                    </Link>

                    <button className="md:hidden" onClick={() => setHidden(!hidden)}>
                        <FaBars size={24} />
                    </button>
                </div>

                <ul
                    className={`${
                        hidden ? 'hidden md:flex' : 'flex'
                    } flex-col md:flex-row items-stretch md:items-center gap-x-8 gap-y-2`}
                >
                    <NavbarLink href="/team" text="Team" />
                    <NavbarLink href="/blog" text="Blog" />
                    <NavbarLink href="/seasons" text="Seasons" />
                    <NavbarLink href="/sponsors" text="Sponsors" />
                </ul>
            </div>
        </header>
    );
};

export { Navbar };
