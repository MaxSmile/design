import { useState, useEffect } from "react";
import Head from "next/head";
import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "sonner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import portfolios from "../../data/portfolios.json";

// Dynamic page generation
export async function getStaticPaths() {
    const paths = portfolios.map((p) => ({
        params: { id: p.id },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const portfolio = portfolios.find((p) => p.id === params.id);
    if (!portfolio) {
        return { notFound: true };
    }

    return { props: { portfolio } };
}

const CaseStudy = ({ portfolio }) => {
    const router = useRouter();
    const {
        id,
        title,
        subtitle,
        tag,
        watermark,
        bgColor = "from-slate-950 to-slate-700",
        image,
        source,
        url,
        client,
        role,
        year,
        duration,
        challenge,
        solution,
        tags = [],
    } = portfolio;

    // State for interactive CSS mockups
    const [vpnConnected, setVpnConnected] = useState(false);
    const [btcAmount, setBtcAmount] = useState("0.05");
    const [usdEquivalent, setUsdEquivalent] = useState("3,450.00");
    const [web3Connected, setWeb3Connected] = useState(false);
    const [progressPercent, setProgressPercent] = useState(78);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [selectedCar, setSelectedCar] = useState("Porsche Cayenne");
    const [selectedService, setSelectedService] = useState("Reflexology Treatment");

    // Dynamic Navigation links
    const currentIndex = portfolios.findIndex((p) => p.id === id);
    const prevProject = portfolios[(currentIndex - 1 + portfolios.length) % portfolios.length];
    const nextProject = portfolios[(currentIndex + 1) % portfolios.length];

    // Quick conversion calculator for Coinage Wallet mockup
    useEffect(() => {
        const num = parseFloat(btcAmount);
        if (!isNaN(num)) {
            setUsdEquivalent((num * 69000).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
        } else {
            setUsdEquivalent("0.00");
        }
    }, [btcAmount]);

    // Handle Quick Trade in Wallet Mockup
    const handleQuickTrade = (e) => {
        e.preventDefault();
        toast.success(`Successfully bought ${btcAmount} BTC for $${usdEquivalent}!`);
    };

    // Render large header SVG watermark
    const renderHeaderWatermark = () => {
        const svgClass = "w-[300px] h-[300px] text-white/5 absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none transform translate-x-12 md:translate-x-0";
        switch (watermark) {
            case "shield":
                return (
                    <svg className={svgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                );
            case "dollar":
                return (
                    <svg className={svgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-1.958-.659-1.171-.879-1.171-2.303 0-3.182 1.172-.879 3.07-.879 4.242 0L15 8.818M12 3v3m0 12v3" />
                    </svg>
                );
            case "heartbeat":
                return (
                    <svg className={svgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-9 4 18 3-12 2 3h3" />
                    </svg>
                );
            case "car":
                return (
                    <svg className={svgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.5-1.2-.7-1.8-.7H5c-.6 0-1.2.3-1.5.8L1.2 11c-.5.7-.7 1.6-.2 2.4.3.5.8.8 1.4.8l1.6-.2V16c0 .6.4 1 1 1h2M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                );
            case "camera":
                return (
                    <svg className={svgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316A2.192 2.192 0 0014.515 4H9.485c-.655 0-1.264.38-1.555.97L6.827 6.175zM15 13.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            case "heart":
                return (
                    <svg className={svgClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    // Render interactive CSS mockup based on ID
    const renderInteractiveMockup = () => {
        switch (id) {
            case "voice-vpn":
                return (
                    <div className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-inner w-full max-w-[340px] mx-auto relative">
                        {/* Status bar */}
                        <div className="w-full flex justify-between px-4 mb-6 text-[10px] text-slate-400 font-mono">
                            <span>VoiceVPN v2.4</span>
                            <span className="flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${vpnConnected ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`}></span>
                                {vpnConnected ? "SECURE" : "UNPROTECTED"}
                            </span>
                        </div>

                        {/* Connection Circle */}
                        <button
                            onClick={() => {
                                setVpnConnected(!vpnConnected);
                                toast(vpnConnected ? "VPN Disconnected" : "VPN Successfully Connected!");
                            }}
                            className={`w-32 h-32 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-500 relative cursor-pointer outline-none ${
                                vpnConnected
                                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105"
                                    : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:scale-105"
                            }`}
                        >
                            <svg className="w-10 h-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.07 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                            <span className="text-[10px] font-bold tracking-wider uppercase">
                                {vpnConnected ? "DISCONNECT" : "CONNECT"}
                            </span>
                        </button>

                        {/* Status Label */}
                        <div className="mt-8 text-center space-y-1">
                            <div className="text-xs font-semibold text-white">
                                {vpnConnected ? "Geneva, Switzerland" : "No active protection"}
                            </div>
                            <div className="text-[10px] text-slate-400">
                                {vpnConnected ? "IP: 109.202.107.4 • Ping: 14ms" : "Your real IP is exposed"}
                            </div>
                        </div>

                        {/* Server List Selection */}
                        <div className="w-full mt-6 space-y-2">
                            <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-1">Selected Location</div>
                            <div className="bg-slate-800/40 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">🇨🇭</span>
                                    <div>
                                        <div className="text-xs font-semibold text-white">Switzerland</div>
                                        <div className="text-[9px] text-slate-400">Geneva Server #4</div>
                                    </div>
                                </div>
                                <span className="text-[10px] text-emerald-400 font-mono">14ms</span>
                            </div>
                        </div>
                    </div>
                );
            case "coinage-wallet":
                return (
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl w-full max-w-[380px] mx-auto text-white">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-bold font-heading tracking-wide">Coinage Exchange</span>
                            <span className="text-[9px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-mono">Live</span>
                        </div>

                        {/* Balance display */}
                        <div className="mb-6">
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider">Total Balance</span>
                            <div className="text-2xl font-bold font-heading mt-0.5">$32,845.50</div>
                            <div className="text-[10px] text-emerald-400 font-medium mt-1">+$1,420.25 (4.52% today)</div>
                        </div>

                        {/* Quick Trade Form */}
                        <form onSubmit={handleQuickTrade} className="bg-slate-800/50 border border-slate-800/80 rounded-2xl p-4 space-y-4">
                            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Quick Swap</div>
                            
                            <div className="space-y-1.5">
                                <label className="text-[9px] text-slate-400">Buy Bitcoin (BTC)</label>
                                <div className="flex bg-slate-900 rounded-xl p-2.5 items-center border border-slate-800">
                                    <input 
                                        type="number" 
                                        step="0.01" 
                                        value={btcAmount} 
                                        onChange={(e) => setBtcAmount(e.target.value)}
                                        className="bg-transparent border-none outline-none flex-grow text-sm font-mono text-white" 
                                    />
                                    <span className="text-xs font-bold text-slate-400 px-2 border-l border-slate-800">BTC</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs font-semibold px-1">
                                <span className="text-slate-400">Total USD Cost:</span>
                                <span className="text-white font-mono">${usdEquivalent}</span>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] transition-all rounded-xl text-xs font-bold text-slate-950 uppercase cursor-pointer"
                            >
                                Instant Buy
                            </button>
                        </form>
                    </div>
                );
            case "heptapolis":
                return (
                    <div className="bg-[#0b1411] border border-[#162722] rounded-3xl p-6 shadow-2xl w-full max-w-[360px] mx-auto text-emerald-100 flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-emerald-400 tracking-wider">HEPTAPOLIS ICO</span>
                            <button 
                                onClick={() => {
                                    setWeb3Connected(!web3Connected);
                                    toast(web3Connected ? "Wallet disconnected" : "Metamask wallet successfully connected!");
                                }}
                                className={`px-3 py-1 text-[10px] font-bold rounded-lg border transition-all duration-300 cursor-pointer ${
                                    web3Connected 
                                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" 
                                        : "bg-transparent border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10"
                                }`}
                            >
                                {web3Connected ? "0x71C...3F9b" : "Connect Wallet"}
                            </button>
                        </div>

                        {/* Presale Info */}
                        <div className="bg-[#12221d]/50 border border-[#1b342b]/60 rounded-2xl p-4 space-y-3">
                            <div className="flex justify-between text-xs">
                                <span className="text-slate-400 font-medium">Presale Stage 1</span>
                                <span className="text-emerald-400 font-bold font-mono">{progressPercent}% Filled</span>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1b342b]/40 text-center">
                                <div>
                                    <div className="text-[10px] text-slate-400">Total Raised</div>
                                    <div className="text-xs font-bold font-mono text-white">1,560.4 ETH</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400">Target</div>
                                    <div className="text-xs font-bold font-mono text-white">2,000 ETH</div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive simulation */}
                        <button
                            onClick={() => {
                                if (progressPercent < 100) {
                                    setProgressPercent(prev => Math.min(100, prev + 2));
                                    toast.success("Successfully contributed 0.5 ETH to Presale!");
                                } else {
                                    toast.info("Presale is fully filled! Thank you!");
                                }
                            }}
                            disabled={!web3Connected}
                            className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 disabled:opacity-50 hover:opacity-90 active:scale-[0.98] transition-all rounded-xl text-xs font-bold text-slate-950 uppercase cursor-pointer"
                        >
                            {web3Connected ? "Contribute 0.5 ETH" : "Connect Wallet to Buy"}
                        </button>
                    </div>
                );
            case "cbay":
                return (
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xl w-full max-w-[360px] mx-auto">
                        <div className="flex items-center justify-between mb-5 border-b border-slate-50 pb-3">
                            <span className="font-heading text-sm text-dark font-bold">Cbay Rent a Car</span>
                            <span className="text-[10px] text-slate-400">Cyprus booking</span>
                        </div>

                        {/* Car search result list */}
                        <div className="space-y-3">
                            {[
                                { name: "Porsche Cayenne", price: "$145/day", type: "SUV" },
                                { name: "Mercedes C-Class", price: "$95/day", type: "Sedan" },
                                { name: "Fiat 500 Cabrio", price: "$45/day", type: "Compact" }
                            ].map((car) => (
                                <div 
                                    key={car.name}
                                    onClick={() => setSelectedCar(car.name)}
                                    className={`p-3 border rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 ${
                                        selectedCar === car.name 
                                            ? "border-rose-600 bg-rose-50/20 shadow-md shadow-rose-100/50" 
                                            : "border-slate-100 bg-slate-50/50 hover:border-slate-300"
                                    }`}
                                >
                                    <div>
                                        <div className="text-xs font-bold text-dark">{car.name}</div>
                                        <div className="text-[9px] text-slate-500 uppercase mt-0.5">{car.type}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold text-rose-600 font-mono">{car.price}</div>
                                        <div className="text-[9px] text-slate-400">excl. insurance</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action button */}
                        <button
                            onClick={() => {
                                toast.success(`Successfully booked ${selectedCar}! A confirmation has been sent.`);
                            }}
                            className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-[0.98] transition-all rounded-xl text-xs font-bold text-white uppercase mt-5 cursor-pointer"
                        >
                            Reserve {selectedCar.split(" ")[0]}
                        </button>
                    </div>
                );
            case "camera-mirrors":
                return (
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl w-full max-w-[330px] mx-auto text-white">
                        {/* Mock camera view */}
                        <div className="aspect-[4/3] rounded-2xl bg-slate-950 border border-slate-850 relative overflow-hidden flex items-center justify-center">
                            {/* Overlay grids */}
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20 border border-white">
                                <div className="border-r border-b border-white"></div>
                                <div className="border-r border-b border-white"></div>
                                <div className="border-b border-white"></div>
                                <div className="border-r border-b border-white"></div>
                                <div className="border-r border-b border-white"></div>
                                <div className="border-b border-white"></div>
                                <div className="border-r border-white"></div>
                                <div className="border-r border-white"></div>
                                <div></div>
                            </div>

                            {/* Simulated view (animated gradient overlay based on state) */}
                            <div 
                                className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-indigo-400 to-pink-400 duration-200 transition-all"
                                style={{ 
                                    filter: `brightness(${brightness}%) contrast(${contrast}%)` 
                                }}
                            ></div>

                            <span className="relative z-10 text-[10px] bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full text-white/80 font-mono">Camera Active</span>
                        </div>

                        {/* Sliders */}
                        <div className="mt-5 space-y-3.5">
                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>Brightness</span>
                                    <span className="font-mono">{brightness}%</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="50" 
                                    max="150" 
                                    value={brightness}
                                    onChange={(e) => setBrightness(e.target.value)}
                                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" 
                                />
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-slate-400">
                                    <span>Contrast</span>
                                    <span className="font-mono">{contrast}%</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="50" 
                                    max="150" 
                                    value={contrast}
                                    onChange={(e) => setContrast(e.target.value)}
                                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400" 
                                />
                            </div>
                        </div>

                        {/* Capture button */}
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => {
                                    toast.success("Snapshot saved to gallery!");
                                }}
                                className="w-14 h-14 rounded-full bg-white hover:bg-slate-200 active:scale-95 transition-all border-4 border-slate-700 flex items-center justify-center cursor-pointer outline-none"
                            ></button>
                        </div>
                    </div>
                );
            case "kimfoot":
                return (
                    <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-xl w-full max-w-[360px] mx-auto text-dark">
                        <div className="flex items-center justify-between mb-5 border-b border-slate-50 pb-3">
                            <span className="font-heading text-sm text-dark font-bold">Kimfoot Wellness</span>
                            <span className="text-[10px] px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full font-semibold">Spa</span>
                        </div>

                        {/* Service Cards */}
                        <div className="space-y-2">
                            {[
                                { name: "Reflexology Treatment", time: "60 mins", price: "$85" },
                                { name: "Hot Stone Foot Therapy", time: "75 mins", price: "$105" },
                                { name: "Aromatherapy Foot Spa", time: "45 mins", price: "$65" }
                            ].map((service) => (
                                <div 
                                    key={service.name}
                                    onClick={() => setSelectedService(service.name)}
                                    className={`p-3 border rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300 ${
                                        selectedService === service.name 
                                            ? "border-purple-600 bg-purple-50/10 shadow-sm" 
                                            : "border-slate-50 bg-slate-50/20 hover:border-slate-200"
                                    }`}
                                >
                                    <div>
                                        <div className="text-xs font-semibold text-dark">{service.name}</div>
                                        <div className="text-[9px] text-slate-500 mt-0.5">{service.time}</div>
                                    </div>
                                    <span className="text-xs font-bold text-purple-600 font-mono">{service.price}</span>
                                </div>
                            ))}
                        </div>

                        {/* Booking CTA */}
                        <button
                            onClick={() => {
                                toast.success(`Successfully booked ${selectedService}! We look forward to seeing you.`);
                            }}
                            className="w-full py-2.5 bg-purple-900 hover:bg-purple-950 active:scale-[0.98] transition-all rounded-xl text-xs font-bold text-white uppercase mt-5 cursor-pointer"
                        >
                            Book Appointment
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    const showcaseMockup = renderInteractiveMockup();

    return (
        <div className="rokstar min-h-screen bg-slate-50/10">
            <Head>
                <title>{`${title} — Iryna Vasylkova Case Study`}</title>
                <meta name="description" content={`Case study details for ${title} project design by Iryna Vasylkova.`} />
            </Head>
            
            <Header />

            {/* Banner Section */}
            <section className={`pt-[120px] md:pt-[150px] pb-[60px] md:pb-[90px] bg-gradient-to-br ${bgColor} relative overflow-hidden`}>
                {renderHeaderWatermark()}
                
                <div className="container relative z-10">
                    {/* Back Link */}
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition duration-200 text-sm font-semibold mb-6 group"
                    >
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        <span>Back to home</span>
                    </Link>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading text-white tracking-tight uppercase mb-3">
                        {title}
                    </h1>
                    <p className="text-white/80 text-base md:text-lg font-light tracking-wide">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Case Study Details */}
            <section className="py-[60px] md:py-[100px]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: Challenge & Solution */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Challenge */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-heading text-dark tracking-tight pb-2 border-b border-slate-100 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-rose-600 rounded-full"></span>
                                    The Challenge
                                </h2>
                                <p className="text-slate-600 text-sm leading-loose">
                                    {challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-heading text-dark tracking-tight pb-2 border-b border-slate-100 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-rose-600 rounded-full"></span>
                                    The Solution
                                </h2>
                                <p className="text-slate-600 text-sm leading-loose">
                                    {solution}
                                </p>
                            </div>

                            {/* Showcase */}
                            <div className="space-y-6 pt-4">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-heading text-dark tracking-tight flex items-center gap-3">
                                        <span className="w-1.5 h-6 bg-rose-600 rounded-full"></span>
                                        Project Visual
                                    </h2>
                                    <p className="text-slate-500 text-xs font-medium">
                                        Preview asset and summary details are based on the Vasilkoff.com project source.
                                    </p>
                                </div>
                                
                                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/50">
                                    {showcaseMockup ? (
                                        <div className="flex min-h-[360px] items-center justify-center p-8">
                                            {showcaseMockup}
                                        </div>
                                    ) : (
                                        <div className="relative aspect-[16/10]">
                                            <NextImage
                                                src={image}
                                                alt={`${title} project visual`}
                                                fill
                                                sizes="(min-width: 992px) 60vw, 100vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sidebar Metadata */}
                        <div className="lg:col-span-4">
                            <div className="bg-[#F5F4F0] border border-slate-150 rounded-3xl p-8 space-y-8 sticky top-24">
                                <div className="space-y-1">
                                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Client</div>
                                    <div className="text-sm font-bold text-dark">{client}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Role</div>
                                    <div className="text-sm font-bold text-dark">{role}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Year</div>
                                    <div className="text-sm font-bold text-dark">{year}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Duration</div>
                                    <div className="text-sm font-bold text-dark">{duration}</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Source</div>
                                    <div className="text-sm font-bold text-dark">{source}</div>
                                </div>
                                {url && url !== "#" && (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex text-sm font-bold text-rose-600 transition-colors duration-200 hover:text-rose-700"
                                    >
                                        Visit project
                                    </a>
                                )}
                                
                                <div className="space-y-3 pt-6 border-t border-slate-200">
                                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Disciplines & Tools</div>
                                    <div className="flex flex-wrap gap-2">
                                        {tags.map((t) => (
                                            <span 
                                                key={t}
                                                className="px-3 py-1 text-xs border border-slate-300 rounded-full text-slate-700 bg-white font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation footer */}
            <section className="border-t border-slate-100 py-10 bg-slate-50/10">
                <div className="container flex justify-between items-center">
                    <Link 
                        href={`/portfolio/${prevProject.id}`}
                        className="flex items-center gap-3 text-dark hover:text-rose-600 transition-colors duration-200 group text-sm font-semibold"
                    >
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <div className="text-left">
                            <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-normal">Previous</span>
                            <span>{prevProject.title}</span>
                        </div>
                    </Link>
                    
                    <Link 
                        href={`/portfolio/${nextProject.id}`}
                        className="flex items-center gap-3 text-dark hover:text-rose-600 transition-colors duration-200 group text-sm font-semibold text-right"
                    >
                        <div className="text-right">
                            <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-normal">Next</span>
                            <span>{nextProject.title}</span>
                        </div>
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CaseStudy;
