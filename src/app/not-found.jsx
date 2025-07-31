"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Link from "next/link";
import './not-found.css';
import Banner from "@/app/_components/Banner/Banner";

export default function ErrorPage() {
    const breadcrumbs = [
        { text: "Home", url: "/" },
    ];


    return (
        <>
            <Navbar/>
            <Banner headingText="Stránka nenalezena" breadcrumbs={breadcrumbs}/>
                <main>
                    <section className="notFound" id="notFound">
                        <div className="container">
                            <div className="row">
                                <h2>404</h2>
                                <h3>We couldn't find what you're looking for.</h3>
                                <div className="btns-row">
                                    <Link href="/" rel="noopenner noreferrer" alt="Odkaz na úvodní stránku" className="btn btn-primary">Return to homepage</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
    )
}
