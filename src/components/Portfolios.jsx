import Shape from "./Shape";
import Portfolio from "./Portfolio";
import {useEffect, useState} from "react";
import SectionTitle from "./SectionTitle";
import portfolios from "../data/portfolios.json";

const Portfolios = () => {
    const [categories, setCategories] = useState([]);
    const [filterValue, setFilterValue] = useState("*");
    const [filteredPortfolios, setFilteredPortfolios] = useState([...portfolios]);

    const onFilterHandler = (event) => {
        const target = event.target;
        const value = target.dataset.filter;
        setFilterValue(value);
        const portfolioFiltered = portfolios.map(portfolio => {
            return {
                ...portfolio,
                category: portfolio.categories.find(cate => cate === value)
            }
        }).filter(item => item.category === value);

        value === "*" ? setFilteredPortfolios(portfolios) : setFilteredPortfolios(portfolioFiltered);
    };


    useEffect(() => {
        const filteredCategories = portfolios.map(portfolio => portfolio.categories);
        const uniqueCategories = [...new Set(filteredCategories.flat())];
        setCategories(uniqueCategories);
    }, []);


    return (
        <section className="bg-gray-50 relative pt-[100px] pb-[100px] lg:pb-[200px]" id="portfolio">
            <div className="container">
                <SectionTitle title="Portfolios"/>

                <nav className="mb-10 space-x-5">
                    <button
                        data-filter="*"
                        onClick={(event) => onFilterHandler(event)}
                        className={`${filterNavItemStyle} ${filterValue === "*" ? filterNavItemActiveStyle : ""}`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            data-filter={category}
                            onClick={(event) => onFilterHandler(event)}
                            className={`${filterNavItemStyle} ${filterValue === category ? filterNavItemActiveStyle : ""}`}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
                    {filteredPortfolios.map(portfolio => (
                        <Portfolio
                            key={portfolio.id}
                            title={portfolio.title}
                            videoLink={portfolio.videoLink}
                            featuredVideo={portfolio.featuredVideo}
                            thumb={`/images/portfolio/${portfolio.thumb}`}
                        />
                    ))}
                </div>
            </div>

            <Shape/>
        </section>
    );
};

const filterNavItemStyle = "text-black capitalize font-medium relative";
const filterNavItemActiveStyle = "after:absolute after:h-[6px] after:w-[6px] after:rounded-full after:bg-slate-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-1";

export default Portfolios;
