import Image from "next/image";
import about from "../data/about.json";
import SocialMedia from "./SocialMedia";
import SectionTitle from "./SectionTitle";

const AboutMe = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="about">
            <div className="container">
                <SectionTitle
                    title="About Me"
                    className="lg:hidden"
                />
                
                <div className="md:grid grid-cols-12 items-center">
                    <div className="col-span-4 sm:text-center md:text-left lg:grayscale transition duration-200 hover:grayscale-0">
                        <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                            <Image
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/${about.thumb}`}
                                alt={about.name}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                    </div>

                    <div className="col-start-6 col-end-13">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="About Me"
                                className="hidden lg:block"
                            />

                            <div className="bio-text">
                                <p>I design clear, polished digital experiences for businesses that need stronger websites, product interfaces, and brand systems.</p>
                                <p>My work helps service companies, SaaS products, and ecommerce brands turn complex offers into interfaces people can understand and trust.</p>
                                <p>Across web, mobile, and identity projects, I focus on practical visual systems, clean user flows, and design that supports conversion, credibility, and long-term consistency.</p>

                            </div>

                            <SocialMedia className="mt-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
