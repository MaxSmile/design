import Service from "./Service";
import SectionTitle from "./SectionTitle";
import services from "../data/services.json";
import Shape from "./Shape";

const Services = () => {
    return (
        <section className="service-area bg-slate-50/30 relative pt-[100px] pb-[100px] lg:pb-[160px]" id="services">
            <div className="container">
                <SectionTitle title="Services" />

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map(service => (
                        <Service
                            key={service.id}
                            desc={service.desc}
                            title={service.title}
                            icon={service.icon}
                            tags={service.tags}
                        />
                    ))}
                </div>
            </div>

            <Shape fillColor="#FFFFFF"/>
        </section>
    );
};

export default Services;
