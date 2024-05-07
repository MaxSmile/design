import Link from 'next/link';
import Image from "next/image";

const Logo = ({variant, className}) => {
    return (
        <Link href="/">
            <a className={`leading-0 inline-block ${className ?? ""}`}>
                <Image
                    width={50}
                    height={55}
                    src={`/images/logo-${variant}.png`}
                />
            </a>
        </Link>
    );
};

Logo.defaultProps = {
    variant: "light"
}

export default Logo;
