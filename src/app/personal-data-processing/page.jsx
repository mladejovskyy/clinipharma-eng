"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import Contact from "@/app/_components/Contact/Contact";
import Banner from "@/app/_components/Banner/Banner";
import './page.css';
import Link from "next/link";

export default function GDPRPage() {
    const breadcrumbs = [
        { text: "Home", url: "/" },
        { text: "Personal Data Processing", url: "/personal-data-processing/" },
    ];

    return (
        <>
            <Navbar/>
            <Banner headingText="Personal Data Processing" breadcrumbs={breadcrumbs}/>
            <main>
                <section className="gdpr" id="gdpr">
                    <div className="container">
                        <div className="row">
                            <div className="item">
                                <h2>Who is the data controller?</h2>
                                <p className="sm">
                                    The controller of your personal data is CliniPharma s.r.o, which provides services and ensures the protection of your personal data in accordance with applicable legislation, including GDPR.
                                </p>
                            </div>
                            <div className="item">
                                <h2>Contact details for personal data protection</h2>
                                <p className="sm">
                                    If you have any questions regarding personal data protection, you can contact us using the following contact details:
                                </p>
                                <ul>
                                    <li>Email address: <Link aria-label="Send email to sales@clinipharma.eu" rel="noopener norefferer" target="_blank" href="mailto:sales@clinipharma.eu">sales@clinipharma.eu</Link></li>
                                    <li>Phone number: <Link aria-label="Call +420 602 243 441" rel="noopener norefferer" target="_blank" href="tel:602243441">+420 602 243 441</Link></li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>Purpose of processing personal data</h2>
                                <p className="sm">
                                    Personal data is processed for the following purposes:
                                </p>
                                <ul>
                                    <li><span>Accounting</span>: For issuing and recording tax documents (billing information).</li>
                                    <li><span>Website analysis and management</span>: Use of tools for traffic analysis and website optimization.</li>
                                    <li><span>Communication and order processing</span>: Processing data for order fulfillment, invoicing, and communication regarding orders.</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>Personal data processors</h2>
                                <p className="sm">
                                    To ensure certain specific processing operations, we use third-party services that specialize in such processing and are GDPR compliant.
                                </p>
                                <p className="sm">
                                    The main personal data processors include:
                                </p>
                                <ul>
                                    <li>external accounting company assigned to process tax data</li>
                                    <li><span>Analytical tools: Google Analytics</span> – collection and analysis of website traffic statistics. Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. To ensure an adequate level of data protection when transferring data to the USA, <span>Standard Contractual Clauses (SCCs)</span> have been used as set out by EU rules for data transfers to third countries.</li>
                                    <li>external developer assigned to create and manage the company website</li>
                                </ul>
                            </div>
                            <div className="item">
                                <h2>Transfer of personal data to third parties</h2>
                                <p className="sm">
                                    Your personal data is accessible only to our employees and collaborators who are bound by confidentiality and trained in personal data security.
                                </p>
                                <p className="sm">
                                    If necessary, we use external processors to carry out specific operations, such as analytics tools (e.g., Google Analytics), who process data in accordance with GDPR.
                                </p>
                            </div>
                            <div className="item">
                                <h2>Transfer of data outside the EU</h2>
                                <p className="sm">
                                    Personal data is processed exclusively within the European Union or in countries that provide an adequate level of protection based on a decision by the European Commission.
                                </p>
                                <p className="sm">
                                    If data is transferred to the USA, <span>Standard Contractual Clauses (SCCs)</span> are used in accordance with GDPR to ensure an adequate level of data protection.
                                </p>
                            </div>
                            <div className="item">
                                <h2>Retention period of personal data</h2>
                                <p className="sm">
                                    We retain personal data for as long as necessary to fulfill the purpose for which it was collected, i.e., for the duration of the contractual relationship between the company and the customer, in accordance with legal retention periods (e.g., for accounting purposes and limitation periods).
                                </p>
                            </div>
                            <div className="item">
                                <h2>Data subject rights</h2>
                                <p className="sm">
                                    You have a number of rights related to your personal data, including the right to:
                                </p>
                                <ul>
                                    <li><span>Right of access</span> You may inquire at any time about what personal data we process about you.</li>
                                    <li><span>Right to rectification</span> You may request the correction or completion of your personal data.</li>
                                    <li><span>Right to erasure</span> If the data is no longer needed for processing purposes, you may request its deletion.</li>
                                    <li><span>Right to restriction of processing</span> If you believe we are processing inaccurate data, you may request its restriction.</li>
                                    <li><span>Right to data portability</span> You have the right to receive your data in a machine-readable format.</li>
                                    <li><span>Right to object</span> You may object to the processing of your personal data.</li>
                                </ul>
                                <p className="sm">To exercise your rights, please contact us at the email address: <Link aria-label="Send email to sales@clinipharma.eu" rel="noopener norefferer" target="_blank" href="mailto:sales@clinipharma.eu">sales@clinipharma.eu</Link></p>
                            </div>
                            <div className="item">
                                <h2>Filing a complaint</h2>
                                <p className="sm">
                                    If you believe that we are unlawfully processing your personal data, you also have the right to
                                    file a complaint with the relevant supervisory authority. The lead supervisory authority
                                    responsible for personal data processing issues is the Czech Office for Personal Data Protection.
                                    However, we would appreciate it if you tried to resolve the issue with us first. You can always
                                    contact us easily via our contact form, email, or phone.
                                </p>
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