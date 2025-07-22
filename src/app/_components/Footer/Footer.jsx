'use client'
import './Footer.css';
import Link from "next/link";
import {useRouter} from 'next/navigation';
import * as CookieConsent from 'vanilla-cookieconsent';
import {useState} from "react";
import Modal from "@/app/_components/Modal/Modal";

export default function Footer({hasBg}) {
    const [isModalOpen, setModalOpen] = useState(false);
    const router = useRouter();

    const scrollToTarget = async (sectionId) => {
        const currentPath = window.location.pathname;
        const offset = window.innerWidth >= 768 ? 50 :60;

        if (currentPath === '/') {
            const section = document.getElementById(sectionId);
            if (section) {
                const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({top: topPosition, behavior: 'smooth'});
            }
        } else {
            await router.push('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({top: topPosition, behavior: 'smooth'});
                }
            }, 100);
        }
    }

    const CookiesOptions = () => {
        CookieConsent.showPreferences();
    }

    return (
        <>
            <footer className={hasBg ? `hasBg` : ``}>
                <div className="container">
                    <div className="row">
                        <div className="item left">
                            <img
                                onClick={() => scrollToTarget('hero')}
                                src="/images/logo.svg"
                                alt="Logo Clinipharma s.r.o"
                                className='logo'
                                draggable="false"
                                loading="lazy"
                                placeholder="blur"
                            />
                            <p className="slogan sm">Vyrábíme kvalitní zdravotnické potřeby</p>
                            <p className="ico">
                                CliniPharma s.r.o<br/>IČO: 24672769<br/>DIČ : CZ24672769<br/>Viklefova 1795/10, 130 00 Praha<br/>
                            </p>
                        </div>
                        <div className="group empty"></div>
                        <div className="group">
                            <h2>Užitečné</h2>
                            <ul>
                                <li><Link href='/zpracovani-osobnich-udaju/'>Zpracování osobních údajů</Link></li>
                                <li onClick={() => setModalOpen(true)}>Bankovní spojení</li>
                                <li onClick={CookiesOptions}>Nastavení cookies</li>
                            </ul>
                        </div>
                        <div className="group">
                            <h2>Navigace</h2>
                            <ul>
                                <li onClick={() => scrollToTarget('hero')}>Úvod</li>
                                <li onClick={() => scrollToTarget('products')}>Produkty</li>
                                <li onClick={() => scrollToTarget('aboutus')}>O nás</li>
                                <li>
                                    <Link href="/ke-stazeni/" rel="noopener noreferrer"
                                          aria-label="Odkaz na podstránku kontakt">
                                        <span>Ke stažení</span>
                                    </Link>
                                </li>
                                <li onClick={() => scrollToTarget('contact')}>Kontakt</li>
                            </ul>
                        </div>
                        <div className="group">
                            <h2>Kontakty</h2>
                            <ul>
                                <li>
                                    <Link
                                        href="mailto:prodej@clinipharma.cz"
                                        className="link"
                                        aria-label="Napište nám email"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <img src="/images/footer-mail.svg" width={30} height={30} alt="Ikona emailu" draggable={false} loading="lazy"/>
                                        prodej@clinipharma.cz
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="tel:602243441"
                                        className="link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Zavolejte nám">
                                        <img src="/images/footer-tel.svg" width={30} height={30} alt="Ikona telefonu" draggable={false} loading="lazy"/>
                                        +420 602 243 441
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://maps.app.goo.gl/eWcXtBDsJmwxfDuCA"
                                        className="link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Odkaz na sídlo firmy">
                                        <img src="/images/footer-location.svg" width={30} height={30} alt="Ikona telefonu" draggable={false} loading="lazy"/>
                                        Palackého 223, 288 02 Nymburk
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="row">
                            <p className="copyright sm">© {new Date().getFullYear()} clinipharma.cz, Všechna práva vyhrazena.</p>
                            <Link href='https://www.mladejovsky.cz' target="_blank" className="author">Web & Design <b>mladejovsky</b></Link>
                        </div>
                    </div>
                </div>
            </footer>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}
