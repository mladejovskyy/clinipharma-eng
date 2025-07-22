import React from 'react'
import '../css/embla.css'

import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarouselGallery = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <section className="nadace space" id="nadace">
                <div className="container">
                    <div className="heading">
                        <h2>Nadace sport</h2>
                        <div className="embla__controls">
                            <div className="embla__buttons">
                                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="embla">
                            <div className="embla__viewport" ref={emblaRef}>
                                <div className="embla__container">
                                    {slides.map((src, index) => (
                                        <div className="embla__slide" key={index}>
                                            <img
                                                src={src.src}
                                                alt={src.alt}
                                                width={368}
                                                height={290}
                                                draggable="false"
                                                loading="lazy"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmblaCarouselGallery
