"use client";
import './Contact.css';
import Link from "next/link";

export default function Contact() {

    return (
        <section className="contact bg" id="contact">
            <div className="container">
                <h2>Kontakt</h2>
                <div className="row">
                    <div className="item">
                        <form action="">
                            <input type="text" name="jmeno" id="jmeno" placeholder="Jméno a příjmení" required/>
                            <input type="email" name="email" id="email" placeholder="E-mail" required/>
                            <input type="text" name="predmet" id="predmet" placeholder="Předmět zprávy" required/>
                            <textarea name="zprava" id="zprava" placeholder="Vaše zpráva" rows={4} required></textarea>
                            <label className="zpracovani-udaju">
                                    <input
                                        required
                                        type="checkbox"
                                        id="zpracovaniUdaju"
                                        name="zpracovaniUdaju"
                                        className="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                    <div>
                                        Souhlasím se <Link
                                        href='/zpracovani-osobnich-udaju/' rel="noopener noreferrer"
                                        aria-label="Odkaz na podstránku zpracování osobních údajů" target="_blank"
                                        className='underline'>zpracováním osobních údajů</Link>
                                    </div>
                            </label>
                            <button type="submit" className="btn btn-secondary">Odeslat</button>
                        </form>
                    </div>
                    <div className="item right">
                        <div className="links">
                            <Link href="mailto:prodej@clinipharma.cz">
                                <img src="/images/contact-email.svg" width={36} height={36} alt="Ikona emailu"
                                     draggable={false} loading="lazy"/>
                                prodej@clinipharma.cz
                            </Link>
                            <Link href="tel:602243441">
                                <img src="/images/contact-tel.svg" width={36} height={36} alt="Ikona emailu"
                                     draggable={false} loading="lazy"/>
                                +420 602 243 441
                            </Link>

                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194.5202834550134!2d15.041272996756117!3d50.1862539289587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0f7645095025%3A0x9045fa59d8f0d914!2sPalack%C3%A9ho%20t%C5%99.%20223%2F5%2C%20288%2002%20Nymburk%202!5e0!3m2!1sen!2scz!4v1739523270834!5m2!1sen!2scz"
                            allowFullScreen="" title="Sídlo OnyxMed" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
</section>
)
}