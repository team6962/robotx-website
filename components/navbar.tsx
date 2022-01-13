const Navbar = () => {
    return (
        <div className="w-screen mx-auto flex flex-row justify-center bg-gray">
            <div className="max-w-screen-md flex-grow flex flex-row justify-between items-center green py-2 gap-4 text-white">
                <a className="flex items-center gap-2" href="/">
                    <img src="/robotx.svg" alt="RobotX" className="max-h-8" />
                    <span>Home</span>
                </a>
                <ul className="flex gap-8">
                    <li>
                        <a href="/team">Team</a>
                    </li>
                    <li>
                        <a href="/news">News</a>
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
