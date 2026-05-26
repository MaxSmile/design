import PropTypes from "prop-types";

const StatCard = ({ value, label, className }) => {
    return (
        <div className={`rounded-md bg-white px-6 py-10 text-center md:py-12 ${className ?? ""}`}>
            <div className="font-heading text-[34px] leading-none text-dark md:text-[46px] lg:text-[52px]">
                {value}
            </div>
            <div className="mt-5 text-[18px] leading-snug text-body md:text-[22px]">
                {label}
            </div>
        </div>
    );
};

StatCard.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default StatCard;
