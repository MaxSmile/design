import PropTypes from "prop-types";

const Service = ({ icon, title, desc, tags, className }) => {
    // Render custom SVG based on icon string
    const renderIcon = () => {
        switch (icon) {
            case "ui-ux":
                return (
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-50 text-orange-600 mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <rect x={3} y={3} width={4} height={4} rx={1} />
                            <rect x={17} y={3} width={4} height={4} rx={1} />
                            <rect x={3} y={17} width={4} height={4} rx={1} />
                            <rect x={17} y={17} width={4} height={4} rx={1} />
                            <path d="M7 5h10M7 19h10M5 7v10M19 7v10" stroke="currentColor" strokeWidth={1.5} strokeDasharray="3 3" />
                            <path d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" />
                        </svg>
                    </div>
                );
            case "web":
                return (
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <rect x={3} y={4} width={18} height={16} rx={2} />
                            <path d="M3 8h18M6 6h2M10 6h2" />
                            <path d="M8 13l-2 2 2 2M16 13l2-2-2 2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 12l-2 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                );
            case "brand":
                return (
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 000 18h1a2 2 0 002-2 2 2 0 00-2-2 1 1 0 01-1-1 3 3 0 013-3h1a4 4 0 004-4 9 9 0 00-9-9z" />
                            <circle cx={7.5} cy={10.5} r={1.5} fill="currentColor" />
                            <circle cx={11.5} cy={7.5} r={1.5} fill="currentColor" />
                            <circle cx={16.5} cy={9.5} r={1.5} fill="currentColor" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-600 mb-6 shrink-0">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <circle cx={12} cy={12} r={9} />
                        </svg>
                    </div>
                );
        }
    };

    return (
        <div className={`group bg-white border border-slate-100 rounded-3xl p-8 duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-100 flex flex-col justify-between h-full ${className ?? ""}`}>
            <div>
                {/* Service Icon */}
                {renderIcon()}

                {/* Service Content */}
                <h3 className="font-heading text-lg text-dark mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{desc}</p>
            </div>

            {/* Service Tags */}
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-50 pt-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3.5 py-1 text-xs border border-slate-200/80 rounded-full text-slate-500 bg-slate-50/50 font-medium whitespace-nowrap"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

Service.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
};

export default Service;
