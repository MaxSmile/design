import Head from "next/head";
import { Toaster } from "sonner";
import '../styles/globals.css';

const siteUrl = "https://design.vasilkoff.com";
const siteTitle = "Iryna Vasylkova | Graphic Designer";
const siteDescription = "I design clear, polished digital experiences for businesses that need stronger websites, product interfaces, and brand systems.";

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Iryna Vasylkova",
    jobTitle: "Graphic Designer",
    description: siteDescription,
    url: siteUrl,
    image: `${siteUrl}/images/graphic-design.png`,
    sameAs: [
        "https://fb.com/irina.vasylkova",
        "https://instagram.com/omorfi5",
        "https://www.linkedin.com/in/irina-vasylkova/",
    ],
    knowsAbout: [
        "UI/UX Design",
        "Web Design",
        "Brand Identity",
        "Figma",
        "Product Design",
    ],
    address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "Northern Territory",
    },
};

const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:image" content={`${siteUrl}/images/graphic-design.png`} />
                <meta property="og:site_name" content="Iryna Vasylkova" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteTitle} />
                <meta name="twitter:description" content={siteDescription} />
                <meta name="twitter:image" content={`${siteUrl}/images/graphic-design.png`} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Component {...pageProps} />
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Rokstar
