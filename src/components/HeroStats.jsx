import StatCard from "./StatCard";

const stats = [
    { value: "12+", label: "Years experience" },
    { value: "50+", label: "Projects delivered" },
    { value: "3", label: "Continents served" },
];

const HeroStats = () => {
    return (
        <section className="relative border-b border-slate-100 bg-white py-12 md:py-16">
            <div className="container">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            value={stat.value}
                            label={stat.label}
                            className="border border-slate-100 py-9 md:py-10 [&>div:first-child]:text-[34px] [&>div:first-child]:md:text-[44px] [&>div:last-child]:text-[17px] [&>div:last-child]:md:text-[19px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroStats;
