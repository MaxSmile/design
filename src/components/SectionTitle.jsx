const SectionTitle = ({title, className}) => {
    return (
        <div className={`mb-12 md:mb-16 ${className ?? ""}`}>
            <h2 className="relative pb-6 font-heading text-[34px] leading-none tracking-normal text-dark md:text-[48px] before:absolute before:left-0 before:bottom-[1px] before:z-10 before:h-[7px] before:w-[96px] before:bg-dark after:absolute after:left-0 after:bottom-[3px] after:h-[2px] after:w-[255px] after:max-w-full after:bg-dark md:after:w-[448px]">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
