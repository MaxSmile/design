import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Iryna Vasylkova</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
