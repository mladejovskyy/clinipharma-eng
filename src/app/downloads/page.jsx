"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Contact from "@/app/_components/Contact/Contact";
import Footer from "@/app/_components/Footer/Footer";
import Banner from "@/app/_components/Banner/Banner";
import './page.css';
import Link from "next/link";

export default function DownloadsPage() {

    const breadcrumbs = [
        { text: "Home", url: "/" },
        { text: "Downloads", url: "/downloads/" },
    ];

    return (
        <>
            <Navbar/>
            <Banner headingText="Downloads" breadcrumbs={breadcrumbs}/>
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
                                        <Link href="/documents/ifu/pro-long-tube-heidelberger-30-75-140-190.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using PRO-LONG TUBE HEIDELBERGER 30 / 75 / 140 / 190">
                                            PRO-LONG TUBE HEIDELBERGER 30 / 75 / 140 / 190
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-heidelberger-extension-line-group.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using Heidelberger Extension Line Group">
                                            Heidelberger Extension Line Group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-ts-set-group.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using Transfusion Set group">
                                            Transfusion Set group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-coro-spike.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using Coro Spike">
                                            Coro Spike
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-transfer-needle.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using Transfer Needle">
                                            Transfer Needle
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-iv-set-group.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using IV Set Group">
                                            IV Set Group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-perfusion-and-pe-extension-line-group.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using Perfusion & PE Extension Line Group">
                                            Perfusion & PE Extension Line Group
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ifu/eu-ifu-combi-stopper.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View instructions for using Combi Stopper">
                                            Combi Stopper
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
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
                                        <Link href="/documents/doc/declaration-of-conformity-3-way-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View DECLARATION OF CONFORMITY 3-WAY-PRO">
                                            DECLARATION OF CONFORMITY 3-WAY-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-infu-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View DECLARATION OF CONFORMITY INFU-PRO">
                                            DECLARATION OF CONFORMITY INFU-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-pro-long-tube.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View DECLARATION OF CONFORMITY PRO-LONG TUBE">
                                            DECLARATION OF CONFORMITY PRO-LONG TUBE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-pro-omnia-lock.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View DECLARATION OF CONFORMITY PRO-OMNIA LOCK">
                                            DECLARATION OF CONFORMITY PRO-OMNIA LOCK
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/doc/declaration-of-conformity-trasfu-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View DECLARATION OF CONFORMITY TRASFU-PRO">
                                            DECLARATION OF CONFORMITY TRASFU-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
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
                                        <Link href="/documents/pl/accesoires-3-way-stopcock.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires 3-WAY STOPCOCK">
                                            Accesoires 3-WAY STOPCOCK
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-3-way-stopcock-10cm-tubing.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires 3-WAY STOPCOCK+10CM TUBING">
                                            Accesoires 3-WAY STOPCOCK+10CM TUBING
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-line-clinix-line-450.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Extension line CLINIX LINE 450">
                                            Extension line CLINIX LINE 450
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-line-clinix-line-1800.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Extension line CLINIX LINE 1800">
                                            Extension line CLINIX LINE 1800
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-combistopper.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires COMBISTOPPER">
                                            Accesoires COMBISTOPPER
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-corospike-blue.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires COROSPIKE BLUE">
                                            Accesoires COROSPIKE BLUE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-corospike-green.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires COROSPIKE GREEN">
                                            Accesoires COROSPIKE GREEN
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-corospike-red.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires COROSPIKE RED">
                                            Accesoires COROSPIKE RED
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-duodrop-d1-classic.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Infusion set DUODROP D1 Classic">
                                            Infusion set DUODROP D1 Classic
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-duodrop-d2-protect.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Infusion DUODROP D2  protect">
                                            Infusion DUODROP D2  protect
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-duodrop-d2-rv-protect.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Infusion DUODROP  D2/RV protect">
                                            Infusion DUODROP  D2/RV protect
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-line-heidelberger-75-pro-long-tube.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Extension line HEIDELBERGER  75 PRO-LONG TUBE">
                                            Extension line HEIDELBERGER  75 PRO-LONG TUBE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-heidelberger-140-pro-long-tube.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Extension HEIDELBERGER  140 PRO-LONG TUBE">
                                            Extension HEIDELBERGER  140 PRO-LONG TUBE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-perfusion-line-150-dehp-free.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Extension PERFUSION LINE 150 DEHP FREE">
                                            Extension PERFUSION LINE 150 DEHP FREE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/extension-perfusion-line-200-dehp-free.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Extension PERFUSION LINE 200 DEHP FREE">
                                            Extension PERFUSION LINE 200 DEHP FREE
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-eco-drop-s3-infu-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Infusion set  ECO DROP S3 Infu Pro">
                                            Infusion set  ECO DROP S3 Infu Pro
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-solucare-180-infu-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Infusion set SOLUCARE 180 Infu Pro">
                                            Infusion set SOLUCARE 180 Infu Pro
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/infusion-set-solucare-rv-180-infu-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Infusion set SOLUCARE RV 180 Infu Pro">
                                            Infusion set SOLUCARE RV 180 Infu Pro
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/accesoires-transfer-needle-pro-omnia-lock.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Accesoires TRANSFER NEEDLE PRO-OMNIA LOCK">
                                            Accesoires TRANSFER NEEDLE PRO-OMNIA LOCK
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/pl/tranfusion-set-unohem-trasfu-pro.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View production list for Tranfusion set UNOHEM TRASFU-PRO">
                                            Tranfusion set UNOHEM TRASFU-PRO
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
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
                                        <Link href="/documents/ce/notified-body-confirmation-letter.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View Notified Body Confirmation Letter Reference: contract n. 000147909/24">
                                            Notified Body Confirmation Letter Reference: contract n. 000147909/24
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/ce-certificate.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View CE certificate 0425-MED-004456-00">
                                            CE certificate 0425-MED-004456-00
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/regulation-of-the-european-parliament-and-of-the-council-15-march-2023.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View REGULATION (EU) 2023/607 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 15 March 2023">
                                            REGULATION (EU) 2023/607 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 15 March 2023
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/ce-en-iso.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View CE EN ISO 13485:2016">
                                            CE EN ISO 13485:2016
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/narizeni-parlamentu-a-rady.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View Nařízení EU parlamentu a rady 2017/45 (CZ)">
                                            Nařízení EU parlamentu a rady 2017/45 (CZ)
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/verordnung-eu-des-europaischen-parlaments-und-des-rates-05-april-2017.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View VERORDNUNG (EU) 2017/745 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 5. April 2017 (DE)">
                                            VERORDNUNG (EU) 2017/745 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 5. April 2017 (DE)
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/regulation-of-the-european-parliament-and-of-the-council-05-april-2017.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View REGULATION (EU) 2017/745 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 5 April 2017 (ENG)">
                                            REGULATION (EU) 2017/745 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 5 April 2017 (ENG)
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/documents/ce/extension-of-the-mdr-transitional-period-and-removal-of-the-sell-off-periods.pdf" target="_blank" rel="noreferrer noopenner" aria-label="View EXTENSION OF THE MDR TRANSITIONAL PERIOD AND REMOVAL OF THE ‘SELL OFF’ PERIODS">
                                            EXTENSION OF THE MDR TRANSITIONAL PERIOD AND REMOVAL OF THE ‘SELL OFF’ PERIODS
                                            <img loading="eager"  src="/images/icon-pdf.svg" alt="PDF Icon" draggable={false} width={28} height={28}/>
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