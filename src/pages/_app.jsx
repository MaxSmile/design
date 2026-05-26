import Head from "next/head";
import { Toaster } from "sonner";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Iryna Vasylkova</title>
            </Head>
            <Component {...pageProps} />
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Rokstar
