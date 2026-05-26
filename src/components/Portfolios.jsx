import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import portfolios from "../data/portfolios.json";

const Portfolios = () => {
    const [categories, setCategories] = useState([]);
    const [filterValue, setFilterValue] = useState("*");
    const [filteredPortfolios, setFilteredPortfolios] = useState([...portfolios]);

    const onFilterHandler = (event) => {
        const target = event.currentTarget; // use currentTarget to ensure we get the button
        const value = target.dataset.filter;
        setFilterValue(value);
        
        if (value === "*") {
            setFilteredPortfolios(portfolios);
        } else {
            const portfolioFiltered = portfolios.filter(portfolio => 
                portfolio.categories.includes(value)
            );
            setFilteredPortfolios(portfolioFiltered);
        }
    };

    useEffect(() => {
        const filteredCategories = portfolios.map((portfolio) => portfolio.categories);
        const uniqueCategories = [...new Set(filteredCategories.flat())];
        const desiredOrder = ["Marketing", "Web", "UI/UX", "Mobile", "Graphics"];
        const sortedCategories = desiredOrder
            .filter((category) => uniqueCategories.includes(category))
            .concat(uniqueCategories.filter((category) => !desiredOrder.includes(category)));

        setCategories(sortedCategories);
    }, []);

    return (
        <section className="relative bg-[#f8f9fb] pt-[90px] pb-[100px] lg:pb-[140px]" id="portfolio">
            <div className="container">
                <nav className="mb-14 flex flex-wrap items-start gap-x-8 gap-y-4">
                    <button
                        data-filter="*"
                        onClick={onFilterHandler}
                        className={`relative cursor-pointer bg-transparent px-0 pb-5 text-xl font-semibold leading-none text-dark transition duration-200 md:text-2xl ${
                            filterValue === "*"
                                ? "text-dark after:absolute after:left-1/2 after:bottom-0 after:h-2 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-slate-500"
                                : "text-dark/80 hover:text-dark"
                        }`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            data-filter={category}
                            onClick={onFilterHandler}
                            className={`relative cursor-pointer bg-transparent px-0 pb-5 text-xl font-semibold leading-none text-dark transition duration-200 md:text-2xl ${
                                filterValue === category
                                    ? "text-dark after:absolute after:left-1/2 after:bottom-0 after:h-2 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-slate-500"
                                    : "text-dark/80 hover:text-dark"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </nav>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPortfolios.map(portfolio => (
                        <Portfolio
                            key={portfolio.id}
                            id={portfolio.id}
                            title={portfolio.title}
                            subtitle={portfolio.subtitle}
                            tag={portfolio.tag}
                            image={portfolio.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolios;
