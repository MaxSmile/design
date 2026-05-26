import NextImage from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

const VoiceVpnPreview = () => (
    <div className="flex h-full items-center justify-center bg-[#0E1C3F] p-8">
        <div className="relative flex h-full w-full max-w-[230px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl">
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 bg-cyan-400/10" />
            <div className="relative flex items-center justify-between text-[10px] font-semibold text-slate-400">
                <span>VoiceVPN</span>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">Secure</span>
            </div>
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-400 bg-emerald-400/10 text-emerald-300 shadow-[0_0_32px_rgba(52,211,153,0.32)]">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.07 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-xs font-bold">Switzerland</div>
                <div className="mt-1 text-[10px] text-slate-400">Geneva Server #4</div>
            </div>
        </div>
    </div>
);

const Portfolio = ({ id, title, subtitle, tag, image }) => {
    return (
        <Link
            href={`/portfolio/${id}`}
            aria-label={`Open ${title} case study`}
            className="group block overflow-hidden rounded-lg bg-white shadow-[0_1px_0_rgba(15,23,42,0.12)]"
        >
            <div className="relative aspect-square overflow-hidden bg-[#eeeeee]">
                {image ? (
                    <NextImage
                        src={image}
                        alt={`${title} portfolio preview`}
                        fill
                        sizes="(min-width: 992px) 31vw, (min-width: 576px) 47vw, 100vw"
                        className="object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                        priority={false}
                    />
                ) : (
                    <VoiceVpnPreview />
                )}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div>
                        {tag && (
                            <span className="mb-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-900">
                                {tag}
                            </span>
                        )}
                        <h3 className="text-base font-bold leading-tight text-white">{title}</h3>
                        <p className="mt-1 text-xs font-medium leading-normal text-white/80">{subtitle}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Portfolio.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tag: PropTypes.string,
    image: PropTypes.string,
};

export default Portfolio;
