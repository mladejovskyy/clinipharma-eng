"use client";
import './Contact.css';
import Link from "next/link";
import { Toaster, toast } from "sonner";
import {useState} from "react";

export default function Contact() {

    const [result, setResult] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setResult("Odesílání....");
        const formData = new FormData(e.target);

        if (formData.get("hiddenField")) {
            setResult("Bot detected. Form submission was denied.");
            toast.error("Bot detected. Form submission was denied.");
            return;
        }

        // Basic client-side input validation
        const name = formData.get("name").trim();
        const subject = formData.get("subject").trim();
        const email = formData.get("email").trim();
        const message = formData.get("message").trim();
        const zpracovaniUdajuChecked = formData.get("zpracovaniUdaju");
        if (!zpracovaniUdajuChecked) {
            setResult("You must agree with personal data processing.");
            toast.error("You must agree with personal data processing.");
            return;
        }

        try {
            const response = await fetch("/mail.php", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setResult(data.message);
            toast.success(data.message);
            if (data.message === "Form has been successfully submitted. Thank you for contacting us. We will get back to you as soon as possible.") {
                e.target.reset();
            }
        } catch (error) {
            console.error("Error:", error);
            const errorMessage = "There has been an error while submitting the form. Please try again later.";
            setResult(errorMessage);
            toast.error(errorMessage);
        }
    };

    return (
        <>
        <section className="contact bg" id="contact">
            <div className="container">
                <h2>Contact</h2>
                <div className="row">
                    <div className="item">
                        <form onSubmit={handleFormSubmit}>
                            <input type="text" name="name" id="name" placeholder="Name" required/>
                            <input type="email" name="email" id="email" placeholder="E-mail" required/>
                            <input type="text" name="subject" id="subject" placeholder="Subject" required/>
                            <textarea name="message" id="message" placeholder="Message" rows={4} required></textarea>
                            <label className="zpracovani-udaju">
                                    <input
                                        type="checkbox"
                                        id="zpracovaniUdaju"
                                        name="zpracovaniUdaju"
                                        className="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                    <div>
                                        I agree with <Link
                                        href='/personal-data-processing/' rel="noopener noreferrer"
                                        aria-label="Link to Personal Data Processing page" target="_blank"
                                        className='underline'>personal data processing</Link>
                                    </div>
                            </label>
                            <input
                                type="text"
                                name="hiddenField"
                                className="hidden-field"
                                aria-hidden="true"
                                tabIndex="-1"
                                autoComplete="off"
                            />
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                    <div className="item right">
                        <div className="links">
                            <Link href="mailto:sales@clinipharma.eu" rel="noreferrer noopenner" aria-label="Send us an email">
                                <img src="/images/contact-email.svg" width={36} height={36} alt="Email Icon"
                                     draggable={false} loading="lazy"/>
                                sales@clinipharma.eu
                            </Link>
                            <Link href="tel:602243441" rel="noreferrer noopenner" aria-label="Call us">
                                <img src="/images/contact-tel.svg" width={36} height={36} alt="Phone Icon"
                                     draggable={false} loading="lazy"/>
                                +420 602 243 441
                            </Link>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194.5202834550134!2d15.041272996756117!3d50.1862539289587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c0f7645095025%3A0x9045fa59d8f0d914!2sPalack%C3%A9ho%20t%C5%99.%20223%2F5%2C%20288%2002%20Nymburk%202!5e0!3m2!1sen!2scz!4v1739523270834!5m2!1sen!2scz"
                            allowFullScreen="" title="Clinpharma Headquarters" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
        <Toaster richColors/>
    </>
)
}