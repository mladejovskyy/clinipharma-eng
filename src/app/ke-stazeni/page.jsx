"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Contact from "@/app/_components/Contact/Contact";
import Footer from "@/app/_components/Footer/Footer";
import Banner from "@/app/_components/Banner/Banner";
import './page.css';
import Link from "next/link";

export default function VyrobaPage() {

    const breadcrumbs = [
        { text: "Domů", url: "/" },
        { text: "Ke stažení", url: "/ke-stazeni/" },
    ];

    return (
        <>
            <Navbar/>
            <Banner headingText="Ke stažení" breadcrumbs={breadcrumbs}/>
            <main>
                <section className="download" id="download">
                    <div className="container">
                        <div className="row">
                            <div className="item">
                                <div className="heading-reverse">
                                    <h2>Instruction for Use</h2>
                                    <h3 className="sm">IFU</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link href="/documents/ifu/pro-long-tube-heidelberger-30-75-140-190.pdf" target="_blank" rel="noreferrer noopenner">
                                            PRO-LONG TUBE HEIDELBERGER 30 / 75 / 140 / 190
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-heidelberger-extension-line-group.pdf" target="_blank" rel="noreferrer noopenner">
                                            Heidelberger Extension Line Group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-ts-set-group.pdf" target="_blank" rel="noreferrer noopenner">
                                            Transfusion Set group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-coro-spike.pdf" target="_blank" rel="noreferrer noopenner">
                                            Coro Spike
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-transfer-needle.pdf" target="_blank" rel="noreferrer noopenner">
                                            Transfer Needle
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-iv-set-group.pdf" target="_blank" rel="noreferrer noopenner">
                                            IV Set Group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-perfusion-and-pe-extension-line-group.pdf" target="_blank" rel="noreferrer noopenner">
                                            Perfusion & PE Extension Line Group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-combi-stopper.pdf" target="_blank" rel="noreferrer noopenner">
                                            Combi Stopper
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <div className="heading-reverse">
                                    <h2>Declarations of Conformity</h2>
                                    <h3 className="sm">DoC</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-3-way-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            DECLARATION OF CONFORMITY 3-WAY-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-infu-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            DECLARATION OF CONFORMITY INFU-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-pro-long-tube.pdf" target="_blank" rel="noreferrer noopenner">
                                            DECLARATION OF CONFORMITY PRO-LONG TUBE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-pro-omnia-lock.pdf" target="_blank" rel="noreferrer noopenner">
                                            DECLARATION OF CONFORMITY PRO-OMNIA LOCK
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-trasfu-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            DECLARATION OF CONFORMITY TRASFU-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="item">
                                <div className="heading-reverse">
                                    <h2>Production List</h2>
                                    <h3 className="sm">PL</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link href="/documents/pl/accesoires-3-way-stopcock.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires 3-WAY STOPCOCK
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-3-way-stopcock-10cm-tubing.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires 3-WAY STOPCOCK+10CM TUBING
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-line-clinix-line-450.pdf" target="_blank" rel="noreferrer noopenner">
                                            Extension line CLINIX LINE 450
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-line-clinix-line-1800.pdf" target="_blank" rel="noreferrer noopenner">
                                            Extension line CLINIX LINE 1800
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-combistopper.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires COMBISTOPPER
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-corospike-blue.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires COROSPIKE BLUE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-corospike-green.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires COROSPIKE GREEN
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-corospike-red.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires COROSPIKE  RED
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-duodrop-d1-classic.pdf" target="_blank" rel="noreferrer noopenner">
                                            Infusion set DUODROP D1 Classic
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-duodrop-d2-protect.pdf" target="_blank" rel="noreferrer noopenner">
                                            Infusion DUODROP D2  protect
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-duodrop-d2-rv-protect.pdf" target="_blank" rel="noreferrer noopenner">
                                            Infusion DUODROP  D2/RV protect
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-line-heidelberger-75-pro-long-tube.pdf" target="_blank" rel="noreferrer noopenner">
                                            Extension line HEIDELBERGER  75 PRO-LONG TUBE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-heidelberger-140-pro-long-tube.pdf" target="_blank" rel="noreferrer noopenner">
                                            Extension HEIDELBERGER  140 PRO-LONG TUBE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-perfusion-line-150-dehp-free.pdf" target="_blank" rel="noreferrer noopenner">
                                            Extension PERFUSION LINE 150 DEHP FREE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-perfusion-line-200-dehp-free.pdf" target="_blank" rel="noreferrer noopenner">
                                            Extension PERFUSION LINE 200 DEHP FREE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-eco-drop-s3-infu-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            Infusion set  ECO DROP S3 Infu Pro
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-solucare-180-infu-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            Infusion set SOLUCARE 180 Infu Pro
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-solucare-rv-180-infu-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            Infusion set SOLUCARE RV 180 Infu Pro
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-transfer-needle-pro-omnia-lock.pdf" target="_blank" rel="noreferrer noopenner">
                                            Accesoires TRANSFER NEEDLE PRO-OMNIA LOCK
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/tranfusion-set-unohem-trasfu-pro.pdf" target="_blank" rel="noreferrer noopenner">
                                            Tranfusion set UNOHEM TRASFU-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="item">
                                <div className="heading-reverse">
                                    <h2>Certifications</h2>
                                    <h3 className="sm">CE</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link href="/documents/ce/notified-body-confirmation-letter.pdf" target="_blank" rel="noreferrer noopenner">
                                            Notified Body Confirmation Letter Reference: contract n. 000147909/24
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/ce-certificate.pdf" target="_blank" rel="noreferrer noopenner">
                                            CE certificate 0425-MED-004456-00
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/regulation-of-the-european-parliament-and-of-the-council-15-march-2023.pdf" target="_blank" rel="noreferrer noopenner">
                                            REGULATION (EU) 2023/607 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 15 March 2023
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/ce-en-iso.pdf" target="_blank" rel="noreferrer noopenner">
                                            CE EN ISO 13485:2016
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/narizeni-parlamentu-a-rady.pdf" target="_blank" rel="noreferrer noopenner">
                                            Nařízení EU parlamentu a rady 2017/45 (CZ)
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/verordnung-eu-des-europaischen-parlaments-und-des-rates-05-april-2017.pdf" target="_blank" rel="noreferrer noopenner">
                                            VERORDNUNG (EU) 2017/745 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 5. April 2017 (DE)
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/regulation-of-the-european-parliament-and-of-the-council-05-april-2017.pdf" target="_blank" rel="noreferrer noopenner">
                                            REGULATION (EU) 2017/745 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 5 April 2017 (ENG)
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/extension-of-the-mdr-transitional-period-and-removal-of-the-sell-off-periods.pdf" target="_blank" rel="noreferrer noopenner">
                                            EXTENSION OF THE MDR TRANSITIONAL PERIOD AND REMOVAL OF THE ‘SELL OFF’ PERIODS
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="Ikona pdf" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}