const Navbar = () => {
    return (
        <div className="w-screen mx-auto flex justify-center bg-gray">
            <div className="max-w-screen-md flex-grow flex justify-between items-center green py-2 gap-4 text-white">
                <a href="/">
                    <img src="/robotx.svg" alt="RobotX" className="h-8" />
                </a>
                <ul className="flex gap-8">
                    <li>
                        <a href="/team">Team</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/seasons">Seasons</a>
                    </li>
                    <li>
                        <a href="/sponsors">Sponsors</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { Navbar };
