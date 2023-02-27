import Footer from "@/components/Base/Footer";
import Navbar from "@/components/Base/Navbar";
import Head from "next/head";

export default function MainLayout({ children, title, description }) {
    return <>
        <Head>
            <title>{`${title && title + ' - '} Main Layout`}</title>
            <meta name="description" content={description} />
        </Head>

        <Navbar />
        {children}
        <Footer />
    </>
}