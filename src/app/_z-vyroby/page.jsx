"use client";

import Navbar from "@/app/_components/Navbar/Navbar";
import Contact from "@/app/_components/Contact/Contact";
import Footer from "@/app/_components/Footer/Footer";
import Banner from "@/app/_components/Banner/Banner";
import './page.css';
import { useState, useEffect } from "react";
import ReactPlayer from 'react-player'

export default function VyrobaPage() {
    const [isVideoOnePlaying, setIsVideoOnePlaying] = useState(false);
    const [isVideoTwoPlaying, setIsVideoTwoPlaying] = useState(false);
    const [isVideoThreePlaying, setIsVideoThreePlaying] = useState(false);
    const [isVideoFourPlaying, setIsVideoFourPlaying] = useState(false);

    const breadcrumbs = [
        { text: "Domů", url: "/" },
        { text: "Z výroby", url: "/z-vyroby/" },
    ];

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
            <Banner headingText="Z výroby" breadcrumbs={breadcrumbs}/>
            <main>
                <section className="vyroba" id="vyroba">
                    <div className="container">
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
            </main>
            <Contact/>
            <Footer/>
        </>
    )
}