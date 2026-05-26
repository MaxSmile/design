import { useEffect, useState } from "react";
import Header from "../components/Header";
import AboutMe from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import HeroArea from "../components/HeroArea";
import HeroStats from "../components/HeroStats";
import Services from "../components/Services";
import Preloader from "../components/Preloader";
import Portfolios from "../components/Portfolios";
import Testimonials from "../components/Testimonials";

const Home = () => {
    const [preloaded, setPreloaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreloaded(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="rokstar">
            <Preloader preloaded={preloaded}/>
            <Header/>
            <HeroArea/>
            <HeroStats/>
            <AboutMe/>
            <Services/>
            <Portfolios/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
