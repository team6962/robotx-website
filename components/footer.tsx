import {
	FaGithub as Github,
	FaInstagram as Instagram,
	FaYoutube as Youtube,
	FaEnvelope as Envelope
} from 'react-icons/fa';

const Footer = () => (
	<footer className="w-screen mx-auto flex justify-center background-accent">
		<div className="max-w-xxs md:max-w-md lg:max-w-lg xl:max-w-xl flex-grow flex flex-col justify-between items-center green py-2 gap-1">
			<div className="flex gap-4">
				<a href="https://instagram.com/frcteam6962" target="_blank" rel="noreferrer">
					<Instagram size={24} className="text hover:text-accent hover:cursor-pointer" />
					<span className="hidden">Instagram</span>
				</a>
				<a href="https://www.youtube.com/@frcteam6962" target="_blank" rel="noreferrer">
					<Youtube size={24} className="text hover:text-accent hover:cursor-pointer" />
					<span className="hidden">Youtube</span>
				</a>
				<a href="https://github.com/Team6962RobotiX" target="_blank" rel="noreferrer">
					<Github size={24} className="text hover:text-accent hover:cursor-pointer" />
					<span className="hidden">Github</span>
				</a>
				<a href="mailto:contact@team6962.com" target="_blank" rel="noreferrer">
					<Envelope size={24} className="text hover:text-accent hover:cursor-pointer" />
					<span className="hidden">Email</span>
				</a>
			</div>
			<span className="text text-sm">
				© {new Date().getFullYear()} RobotX. All Rights Reserved.
			</span>
		</div>
	</footer>
);

export { Footer };
