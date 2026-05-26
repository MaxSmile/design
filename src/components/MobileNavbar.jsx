import { useRouter } from "next/router";
import LinkNext from "next/link";
import { Link as LinkScroll } from "react-scroll";
import navbar from "../data/navbar.json";
import { checkExternalLink } from "../utils/checkExternalLink";

const MobileNavbar = ({ className }) => {
    const router = useRouter();
    const isHome = router.pathname === "/";

    return (
        <nav className={`bg-black overflow-hidden duration-300 sm:hidden ${className ?? ""}`}>
            <ul className="nav p-2">
                {navbar.map((item) => (
                    <li key={item.id}>
                        {checkExternalLink(item.href) ? (
                            <a
                                href={item.href || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-400 hover:bg-white hover:text-dark"
                            >
                                {item.name}
                            </a>
                        ) : isHome ? (
                            <LinkScroll
                                spy={true}
                                smooth={true}
                                duration={500}
                                to={item.href || "#"}
                                className="block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-400 hover:bg-white hover:text-dark"
                            >
                                {item.name}
                            </LinkScroll>
                        ) : (
                            <LinkNext
                                href={`/#${item.href}`}
                                className="block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-400 hover:bg-white hover:text-dark"
                            >
                                {item.name}
                            </LinkNext>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileNavbar;
