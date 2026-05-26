import Shape from "./Shape";
import { Link as ScrollLink } from "react-scroll";

const heroBg = "/images/hero-bg.jpg";

const HeroArea = () => {
    return (
        <section
            id="hero"
            style={{backgroundImage: `url(${heroBg})`}}
            className="relative flex min-h-[620px] items-center overflow-hidden bg-cover bg-center-top bg-no-repeat pt-24 sm:min-h-[700px] lg:min-h-[760px] xl:min-h-[820px]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="container relative z-10">
                <div className="max-w-[760px] text-white">
                    <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                        Graphic design, UI and brand systems
                    </span>
                    <h1 className="font-heading text-[42px] leading-none text-white sm:text-[64px] md:text-[78px] lg:text-[92px]">
                        Iryna Vasylkova
                    </h1>
                    <p className="mt-6 max-w-[620px] text-base leading-8 text-white/80 md:text-xl md:leading-9">
                        Digital design director creating polished websites, product interfaces, and identity systems for teams that need clear, usable visual work.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <ScrollLink
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-bold text-dark transition duration-300 hover:bg-white/90"
                        >
                            View work
                        </ScrollLink>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-white/70 px-7 py-3 text-sm font-bold text-white transition duration-300 hover:border-white hover:bg-white/10"
                        >
                            Start a project
                        </ScrollLink>
                    </div>
                </div>
            </div>

            <Shape className="hidden md:block"/>
        </section>
    );
};

export default HeroArea;
