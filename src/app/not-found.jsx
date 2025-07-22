"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Link from "next/link";
import './not-found.css';
import Banner from "@/app/_components/Banner/Banner";

export default function ErrorPage() {
    const breadcrumbs = [
        { text: "Domů", url: "/" },
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
                                <h3>Nemohli jsme najít hledanou stránku</h3>
                                <div className="btns-row">
                                    <Link href="/" rel="noopenner noreferrer" alt="Odkaz na úvodní stránku" className="btn btn-primary">Vrátit se na úvodní stránku</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
    )
}
