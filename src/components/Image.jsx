import NextImage from "next/image";

const Image = ({src, ...props}) => {
    return (
        <>
            <div className="w-full custom-image">
                <NextImage
                    src={src}
                    layout="fill"
                    objectFit="contain"
                    className="!w-full !relative !h-unset"
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
