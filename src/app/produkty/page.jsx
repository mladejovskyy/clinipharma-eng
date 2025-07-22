"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import {useEffect} from "react";
import './page.css';
import Link from "next/link";
import Contact from "@/app/_components/Contact/Contact";
import Banner from "@/app/_components/Banner/Banner";

export default function NewsPage() {
    useEffect(() => {
        //Animations
        AOS.init({
            disable: function () {
                return window.innerWidth < 768;
            },
        });
    }, []);

    const scrollToTarget = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = window.innerWidth >= 768 ? 110 : 120;
            const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    const breadcrumbs = [
        { text: "Domů", url: "/" },
        { text: "Produkty", url: "/produkty/" },
    ];

    return (
        <>
            <Navbar/>
            <Banner headingText="Produkty" breadcrumbs={breadcrumbs}/>
            <main>
                <section className="products_subpage" id="products_subpage">
                    <div className="container">
                        <div className="row">
                            <img src="/images/products/product-photo1.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo2.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo3.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo4.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo5.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo6.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo7.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo8.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo9.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo10.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo11.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo12.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo13.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                            <img src="/images/products/product-photo14.webp" alt="Foto produktu" draggable={false} loading="lazy"/>
                        </div>
                    </div>
                    <img src="/images/about-pattern.svg" className="pattern left" alt="Patern v pozadí" draggable={false} loading="lazy" width={243} height={416}/>
                    <img src="/images/news-pattern.svg" className="pattern right" alt="Patern v pozadí" draggable={false} loading="lazy" width={167} height={330}/>
                </section>
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}