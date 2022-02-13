import Image from 'next/image';
import img404 from './image404.gif';

export default function RobotX404() {
	return (
		<div className="font-mono">
			<h1 className="text-red-400 text-9xl text-center">404</h1>
			<h2 className="text-red-400 text-xl text-center">Page Not Found</h2>
			<br></br>
			<div className="md:max-w-lg">
				<Image
					src={img404}
					layout="intrinsic"
					className="rounded"
					priority
					alt="404 image"
				/>
			</div>
		</div>
	);
}
