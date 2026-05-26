import NextImage from "next/image";

const Image = ({src, ...props}) => {
    return (
        <div className="w-full lg:grayscale transition duration-200 hover:grayscale-0">
            <NextImage
                width={600}
                height={600}
                {...props}
                src={src}
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
};

export default Image;
