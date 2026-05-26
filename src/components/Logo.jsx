import Link from 'next/link';
import Image from "next/image";

const Logo = ({ variant = "light", className }) => {
    return (
        <Link href="/" className={`leading-0 inline-block ${className ?? ""}`}>
            <Image
                width={50}
                height={55}
                src={`/images/logo-${variant}.png`}
                alt="Iryna Vasylkova"
                style={{ width: "auto", height: "auto" }}
            />
        </Link>
    );
};

export default Logo;
