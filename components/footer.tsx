import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-screen mx-auto flex justify-center bg-gray">
            <div className="max-w-screen-md flex-grow flex flex-col justify-between items-center green py-2 gap-1 text-white">
                <div className="flex gap-4">
                    <a href="https://twitter.com/@frcteam6962" target="_blank">
                        <FaTwitter size={25} />
                    </a>
                    <a href="https://instagram.com/frcteam6962" target="_blank">
                        <FaInstagram size={25} />
                    </a>
                </div>
                <span>© {new Date().getFullYear()} RobotX. All Rights Reserved.</span>
            </div>
        </div>
    );
};

export { Footer };
