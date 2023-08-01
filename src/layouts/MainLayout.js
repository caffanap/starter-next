import Footer from "@/components/Base/Footer";
import Navbar from "@/components/Base/Navbar";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function MainLayout({ children, title, description }) {

    // const { status } = useSession({ required: true }) redirect if not login

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