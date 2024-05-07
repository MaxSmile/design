import Image from "./Image";
import PropTypes from "prop-types";

const Service = ({thumb, title, desc, className}) => {
    return (
        <div className={`service group relative flex px-3 py-5 rounded-md duration-300 hover:bg-gray-50 ${serviceBefore} ${serviceAfter} ${className ?? ""}`}>
            {/* Service Icon */}
            <div className="mr-4 bg-white group-hover:bg-gray-50 relative flex-shrink-0 self-start w-[50px] md:w-auto">
                <Image
                    src={thumb}
                    alt={title}
                />
            </div>

            {/* Service Content */}
            <div>
                <h2 className="font-semibold text-base mb-3">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

const serviceBefore = "before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300";
const serviceAfter = "after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300";

Service.propTypes = {
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default Service;
