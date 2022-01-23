import Image from 'next/image';

export const LeaderCard = ({
    name,
    title,
    mentor = false,
    src
}: {
    name: string;
    title: string;
    mentor?: boolean;
    src: string | StaticImageData;
}) => (
    <div className="flex flex-col rounded-md background-accent">
        <Image
            width={500}
            height={500}
            className="rounded-t-md"
            src={src}
            alt={`${name}, ${title}`}
            quality={50}
            placeholder="blur"
        />
        <div className="flex flex-col p-2 gap-2 items-center text-center">
            <p className="text-accent">{name}</p>
            <p className="text text-sm">{title}</p>
            {mentor && <p className="text text-sm">Student Mentor</p>}
        </div>
    </div>
);
