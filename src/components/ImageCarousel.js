import React, { Fragment, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap'

const ImageCarousel = () => {
    const items = [
        {
            src: "/static/images/test/project-image01.png",
            altText: 'Slide 1',
            caption: 'Slide 1'
        },
        {
            src: "/static/images/test/project-image02.png",
            altText: 'Slide 2',
            caption: 'Slide 2'
        },
        {
            src: "/static/images/test/project-image03.png",
            altText: 'Slide 3',
            caption: 'Slide 3'
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
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        )
    })

    return (
        <Fragment>
            <style>{`
                .custom img {
                    max-width: 100%;
                }
                .carousel-control-next-icon{
                    color: red;
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