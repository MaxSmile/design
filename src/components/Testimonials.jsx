import Link from "next/link";
import SectionTitle from "./SectionTitle";
import StatCard from "./StatCard";
import testimonials from "../data/testimonials.json";

const stats = [
    { value: "Since 2012", label: "Design & development" },
    { value: "60+", label: "Projects delivered" },
    { value: "3", label: "Design disciplines" },
];

const Testimonials = () => {
    return (
        <section className="py-[100px] bg-white-light" id="testimonials">
            <div className="container">
                <SectionTitle title="What Clients Say" />

                {/* Stats strip */}
                <div className="mb-16 grid grid-cols-1 gap-7 md:grid-cols-3">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white rounded-md p-8 flex flex-col gap-6">
                            <p className="text-body leading-loose italic">
                                <span className="text-4xl font-heading text-dark leading-none">&ldquo;</span>
                                {t.quote}
                                <span className="text-4xl font-heading text-dark leading-none">&rdquo;</span>
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center font-heading font-bold text-sm shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="font-semibold text-dark">{t.name}</div>
                                    <div className="text-sm text-body">
                                        {t.role},{" "}
                                        <Link
                                            href={t.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline hover:text-dark transition-colors duration-400"
                                        >
                                            {t.company}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
