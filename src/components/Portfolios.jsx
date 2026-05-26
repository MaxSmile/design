import { useEffect, useState } from "react";
import Portfolio from "./Portfolio";
import portfolios from "../data/portfolios.json";

const ITEMS_PER_PAGE = 6;

const Portfolios = () => {
    const [categories, setCategories] = useState([]);
    const [filterValue, setFilterValue] = useState("*");
    const [filteredPortfolios, setFilteredPortfolios] = useState([...portfolios]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredPortfolios.length / ITEMS_PER_PAGE);
    const pageStart = (currentPage - 1) * ITEMS_PER_PAGE;
    const visiblePortfolios = filteredPortfolios.slice(pageStart, pageStart + ITEMS_PER_PAGE);

    const onFilterHandler = (event) => {
        const target = event.currentTarget; // use currentTarget to ensure we get the button
        const value = target.dataset.filter;
        setFilterValue(value);
        setCurrentPage(1);
        
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
        const desiredOrder = ["Mobile app", "Web", "Branding"];
        const sortedCategories = desiredOrder
            .filter((category) => uniqueCategories.includes(category))
            .concat(uniqueCategories.filter((category) => !desiredOrder.includes(category)));

        setCategories(sortedCategories);
    }, []);

    return (
        <section className="relative bg-[#f8f9fb] pt-[90px] pb-[100px] lg:pb-[140px]" id="portfolio">
            <div className="container">
                <div className="mb-10">
                    <h2 className="text-3xl font-heading text-dark tracking-tight">Selected work</h2>
                    <p className="mt-2 text-sm font-medium text-slate-400">Portfolio projects</p>
                </div>

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
                    {visiblePortfolios.map(portfolio => (
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

                {totalPages > 1 && (
                    <nav className="mt-12 flex items-center justify-center gap-3" aria-label="Portfolio pages">
                        {Array.from({ length: totalPages }, (_, index) => {
                            const page = index + 1;

                            return (
                                <button
                                    key={page}
                                    type="button"
                                    onClick={() => setCurrentPage(page)}
                                    aria-current={currentPage === page ? "page" : undefined}
                                    className={`h-10 w-10 rounded-full border text-sm font-semibold transition duration-200 ${
                                        currentPage === page
                                            ? "border-slate-900 bg-slate-900 text-white"
                                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-900 hover:text-slate-900"
                                    }`}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </nav>
                )}
            </div>
        </section>
    );
};

export default Portfolios;
