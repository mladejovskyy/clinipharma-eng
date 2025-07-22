"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/app/_components/Navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";
import {useEffect, useState} from "react";
import './page.css';
import Link from "next/link";
import Contact from "@/app/_components/Contact/Contact";
import EmblaCarouselGallery from "@/app/_components/EmblaCarousel/js/EmblaCarouselGallery";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";

const OPTIONS = { align: "start" };
const SLIDES = [
  { src: "/images/nadace-photo1.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo2.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo3.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo4.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo5.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo6.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo7.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo8.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo9.webp", alt: "Foto nadace sport" },
  { src: "/images/nadace-photo10.webp", alt: "Foto nadace sport" },
];

export default function Home() {
  const [isVideoOnePlaying, setIsVideoOnePlaying] = useState(false);
  const [isVideoTwoPlaying, setIsVideoTwoPlaying] = useState(false);
  const [isVideoThreePlaying, setIsVideoThreePlaying] = useState(false);
  const [isVideoFourPlaying, setIsVideoFourPlaying] = useState(false);

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
      const offset = window.innerWidth >= 768 ? 50 : 60;
      const topPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  const handleCloseModal = () => {
    setIsVideoOnePlaying(false);
    setIsVideoTwoPlaying(false);
    setIsVideoThreePlaying(false);
    setIsVideoFourPlaying(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar/>
        <main>
          <section className="hero" id="hero">
            <div className="container">
              <div className="row">
                <h1>Bezpečné a spolehlivé zdravotnické potřeby pro moderní zdravotnictví
                </h1>
                <p>
                  Dodáváme certifikované zdravotnické potřeby, které minimalizují rizika kontaminace, zvyšují bezpečnost pacientů a splňují nejnovější medicínské standardy
                </p>
                <div className="btns-row">
                  <div data-aos="fade-right" data-aos-once="true" data-aos-delay="0">
                    <button className="btn btn-secondary" onClick={() => scrollToTarget("contact")}>Kontaktovat</button>
                  </div>
                  <div data-aos="fade-right" data-aos-once="true" data-aos-delay="100">
                    <button className="btn btn-secondary-outline" onClick={() => scrollToTarget("products")}>Zobrazit produkty</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section className="products space-sm" id="products">
          <div className="container">
            <h2>Produkty</h2>
            <div className="row">
              <img src="/images/products/product-photo1.webp" alt="Foto produktu" draggable={false} loading="lazy" className="item one"/>
              <img src="/images/products/product-photo2.webp" alt="Foto produktu" draggable={false} loading="lazy" className="item two"/>
              <img src="/images/products/product-photo3.webp" alt="Foto produktu" draggable={false} loading="lazy" className="item three"/>
              <img src="/images/products/product-photo4.webp" alt="Foto produktu" draggable={false} loading="lazy" className="item four"/>
            </div>
            <div className="btns-row" data-aos="fade-up" data-aos-once="true" data-aos-delay="0">
              <Link href="/produkty/" rel="noopener noreferrer" aria-label="Odkaz na všechny produkty" className="btn btn-primary">Zobrazit všechny produkty</Link>
            </div>
          </div>
        </section>
        <section className="marquee space sm" id="marquee">
          <Marquee style={{ display: 'flex' }}>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
            <Link href="https://cz.kuehne-nagel.com/cs/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Kuehne Nagel">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo1.webp" alt="Logo Kuehne Nagel" draggable={false} width={240} height={50}/>
            </Link>
            <Link href="https://medicalface.cz/" rel="noreferrer noopener nofollow" target="_blank" aria-label="Odkaz na našeho obchodního partnera Medical Face">
              <img loading="lazy" className="marquee-logo" src="/images/marquee-logo2.webp" alt="Logo Medical Face" draggable={false} width={88} height={50}/>
            </Link>
          </Marquee>
        </section>
        <section className="aboutus space" id="aboutus">
          <div className="container">
            <div className="row">
              <div className="item left">
                <h2>O nás</h2>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="0">
                  V roce 1990 začíná naše cesta výrobce zdravotnických prostředků pro Infuzní terapii.
                </p>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                  Výroba je založena v České republice a postupně začíná vznikat holding skupina firem vyrábějící jak v Evropě tak v Asii a skupina CliniPharma Group se zařazuje mezi významné výrobce zdravotnické techniky a také jako OEM výrobce pro světové lídry v tomto oboru.
                </p>
                <div className="btns-row" data-aos="fade-up" data-aos-once="true" data-aos-delay="50">
                  <button className="btn btn-primary" onClick={() => scrollToTarget("contact")}>Kontaktovat</button>
                </div>
              </div>
              <div className="item right">
                <img src="/images/about-photo.webp" alt="Foto našeho týmu" draggable={false} loading="lazy"/>
              </div>
            </div>
          </div>
        </section>
        <section className="history space-sm" id="history">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-once="true" data-aos-delay="0">
              <div className="item one down">
                <img src="/images/history-dot.svg" width={48} height={48} alt="Ikona tečky" draggable={false} loading="lazy" data-aos="zoom-in" data-aos-once="true" data-aos-delay="0"/>
                <div className="group">
                  <h3>1990</h3>
                  <p className="sm">
                    založení v České republice
                  </p>
                </div>
              </div>
              <div className="item two up">
                <div className="group">
                  <p className="sm">
                    joint venture s významným italským výrobcem Infuzní techniky
                  </p>
                  <h3>1994</h3>
                </div>
                <img src="/images/history-dot.svg" width={48} height={48} alt="Ikona tečky" draggable={false} loading="lazy" data-aos="zoom-in" data-aos-once="true" data-aos-delay="50"/>
              </div>
              <div className="item three down">
                <img src="/images/history-dot.svg" width={48} height={48} alt="Ikona tečky" draggable={false} loading="lazy" data-aos="zoom-in" data-aos-once="true" data-aos-delay="100"/>
                <div className="group">
                  <h3>2000</h3>
                  <p className="sm">
                    spolupráce s německým výrobcem ochranných prostředků
                  </p>
                </div>
              </div>
              <div className="item four up">
                <div className="group">
                  <p className="sm">
                    majetkový vstup do výrobce injekční techniky
                  </p>
                  <h3>2002</h3>
                </div>
                <img src="/images/history-dot.svg" width={48} height={48} alt="Ikona tečky" draggable={false} loading="lazy" data-aos="zoom-in" data-aos-once="true" data-aos-delay="150"/>
              </div>
              <div className="item five down">
                <img src="/images/history-dot.svg" width={48} height={48} alt="Ikona tečky" draggable={false} loading="lazy" data-aos="zoom-in" data-aos-once="true" data-aos-delay="200"/>
                <div className="group">
                  <h3>2010</h3>
                  <p className="sm">
                    přechod na holding CliniPharma Group
                  </p>
                </div>
              </div>
              <div className="item six up">
                <div className="group">
                  <p className="sm">
                    výroba v České republice, Slovensko, Itálie a Čína. Prodej výrobků především EU a Asijské trhy pro naše komponenty
                  </p>
                  <h3>2022</h3>
                </div>
                <img src="/images/history-dot.svg" width={48} height={48} alt="Ikona tečky" draggable={false} loading="lazy" data-aos="zoom-in" data-aos-once="true" data-aos-delay="250"/>
              </div>
              <img src="/images/history-line.svg" className="history-line" alt="Čára v pozadí" draggable={false} loading="lazy"/>
              <span className="history-line sm"></span>
            </div>
          </div>
        </section>
        <section className="vyroba space" id="vyroba">
          <div className="container">
            <h2>Z výroby</h2>
            <div className="row">
              <div className="item one" onClick={() => setIsVideoOnePlaying(true)}>
                <img src="/images/vyroba-photo1.webp" className="vyroba-photo" alt="Video z výroby" draggable={false} loading="eager" />
                <img src="/images/icon-play.svg" className="icon-play" alt="Ikona spuštení videa" width={120} height={120} draggable={false} loading="eager" />
              </div>
              <div className="item two" onClick={() => setIsVideoTwoPlaying(true)}>
                <img src="/images/vyroba-photo2.webp" className="vyroba-photo" alt="Video z výroby" draggable={false} loading="eager" />
                <img src="/images/icon-play.svg" className="icon-play" alt="Ikona spuštení videa" width={120} height={120} draggable={false} loading="eager" />
              </div>
              <div className="item three" onClick={() => setIsVideoThreePlaying(true)}>
                <img src="/images/vyroba-photo3.webp" className="vyroba-photo" alt="Video z výroby" draggable={false} loading="eager" />
                <img src="/images/icon-play.svg" className="icon-play" alt="Ikona spuštení videa" width={120} height={120} draggable={false} loading="eager" />
              </div>
              <div className="item four" onClick={() => setIsVideoFourPlaying(true)}>
                <img src="/images/vyroba-photo4.webp" className="vyroba-photo" alt="Video z výroby" draggable={false} loading="eager" />
                <img src="/images/icon-play.svg" className="icon-play" alt="Ikona spuštení videa" width={120} height={120} draggable={false} loading="eager" />
              </div>
            </div>
          </div>
        </section>
        {isVideoOnePlaying && (
            <div className="video-modal" onClick={handleCloseModal}>
              <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=2EgNEP4ka3g"
                    controls={true}
                    playing={true}
                    className="react-player"
                />
              </div>
              <button className="btn btn-primary" onClick={handleCloseModal}>Zavřít video</button>
            </div>
        )}
        {isVideoTwoPlaying && (
            <div className="video-modal" onClick={handleCloseModal}>
              <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=2EgNEP4ka3g"
                    controls={true}
                    playing={true}
                    className="react-player"
                />
              </div>
              <button className="btn btn-primary" onClick={handleCloseModal}>Zavřít video</button>
            </div>
        )}
        {isVideoThreePlaying && (
            <div className="video-modal" onClick={handleCloseModal}>
              <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=2EgNEP4ka3g"
                    controls={true}
                    playing={true}
                    className="react-player"
                />
              </div>
              <button className="btn btn-primary" onClick={handleCloseModal}>Zavřít video</button>
            </div>
        )}
        {isVideoFourPlaying && (
            <div className="video-modal" onClick={handleCloseModal}>
              <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=2EgNEP4ka3g"
                    controls={true}
                    playing={true}
                    className="react-player"
                />
              </div>
              <button className="btn btn-primary" onClick={handleCloseModal}>Zavřít video</button>
            </div>
        )}
      <Contact/>
      <Footer/>
    </>
  );
}
