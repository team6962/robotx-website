import Image, { ImageProps } from 'next/image';

const ImageBackground = ({
    className,
    children,
    imageClassName,
    ...imageProps
}: {
    className?: string;
    children?: React.ReactNode | React.ReactNode[];
    imageClassName?: string;
} & ImageProps) => (
    <>
        <div className="grid grid-cols-1 grid-rows-1 w-screen">
            <div className={'z-10 row-start-1 col-start-1 ' + (className || '')}>{children}</div>
            <div
                className={
                    'row-start-1 col-start-1 overflow-x-clip flex flex-col justify-center image-parent ' +
                    (imageClassName || '')
                }
            >
                <Image quality={90} priority placeholder="blur" {...imageProps} />
            </div>
        </div>
        <style>{`
                .image-parent * {
                    max-width: none !important;
                    width: auto !important;
                    left: 50% !important;
                    transform: translate(-50%, 0) !important;
                }
            `}</style>
    </>
);

export { ImageBackground };
