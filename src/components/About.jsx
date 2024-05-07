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
                    <div className="col-span-4 sm:text-center md:text-left">
                        <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                            <Image
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/${about.thumb}`}
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
                                
                                <p>I'm Irina Vasilkova, the Design Director at Vasilkoff CY Ltd, where I bring ideas to life through captivating design and user-centric experiences.</p>
                                <p>With a passion for aesthetics and a knack for detail, I thrive on crafting memorable digital journeys. My journey into design began in the world of large format advertising printing, where I learned the importance of making a statement through visual communication. Building on this foundation, I pursued my bachelor's degree in design at the National Academy of Managerial Personnel of Culture and Arts in Kyiv, refining my skills and embracing new possibilities.</p>
                                <p>At Vasilkoff, I've had the privilege of working on diverse and exciting projects that challenge and inspire me every day. From developing the sleek interface of Easy VPN Free to crafting the elegant WordPress website for Cbay Rent a Car, each endeavor has allowed me to push creative boundaries and deliver exceptional results.</p>
                                <p>One of my most rewarding experiences was being part of the Heptapolis project, where I contributed to building a comprehensive solution for a crypto ICO project. From smart contract development to landing page design, it was a thrilling journey that showcased the power of collaboration and innovation.</p>
                                <p>My portfolio also includes projects like Kimfoot, a platform promoting holistic foot treatments, and Coinage Wallet, a cryptocurrency exchange platform that reflects Vasilkoff's expertise and vision.</p>
                                <p>Whether it's designing intuitive apps like Camera Mirrors or creating impactful websites for corporate clients like Inter-Euro Investments, my goal is always the same: to craft experiences that delight users and drive success for our partners.</p>
                                <p>I'm incredibly grateful for the opportunity to do what I love every day and to be part of a team that values creativity, innovation, and excellence. Together, we're shaping the future of digital experiences, one design at a time.</p>
                                <p>Thank you for visiting, and I look forward to sharing more of my journey with you!</p>

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
