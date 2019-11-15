import React, { Fragment, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap'
import image01 from "../assets/slide/page1.png"
import image02 from "../assets/slide/page2.png"
import image03 from "../assets/slide/page3.png"
import image04 from "../assets/slide/page4.png"

const ImageCarousel = () => {
    const items = [
        {
            src: `${image01}`,
        },
        {
            src: `${image02}`,
        },
        {
            src: `${image03}`,
        },
        {
            src: `${image04}`,
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                className="custom">
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        )
    })

    return (
        <Fragment>
            <style>{`
                .custom img {
                    max-width: 100%;
                }
            `}
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </Fragment>
    )
}

export default ImageCarousel