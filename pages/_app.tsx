import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

function App({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col min-h-screen dark:bg-zinc-900 dark:text-white">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#cb3d3b" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#b91d47" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#27272a" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>RobotX</title>
            </Head>
            <Navbar />
            <span className="grow"></span>
            <main
                id="main-content"
                className="max-w-xxs md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-8"
            >
                <Component {...pageProps} />
            </main>
            <span className="grow"></span>
            <Footer />
        </div>
    );
}

export default App;
