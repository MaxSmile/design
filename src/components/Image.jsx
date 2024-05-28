import NextImage from "next/image";

const Image = ({src, ...props}) => {
    return (
        <>
            <div className="w-full custom-image lg:grayscale transition duration-200 hover:grayscale-0">
                <NextImage
                    src={src}
                    objectFit="contain"
                    className="!w-full !relative !h-unset"
                    width={600}
                    height={600}
                    {...props}
                />
            </div>
            <style jsx global>{`
                .custom-image > span {
                    position: unset !important;
                }
            `}</style>
        </>
    );
};

export default Image;
