"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ImageCarouselProps = {
  images: string[];
  label: string;
};

export default function ImageCarousel({ images, label }: ImageCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function updateActiveImage() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = Array.from(carousel.children);
    const index = slides.reduce(
      (closestIndex, slide, slideIndex) => {
        const distance = Math.abs(
          slide.getBoundingClientRect().left -
            carousel.getBoundingClientRect().left,
        );
        const closestDistance = Math.abs(
          slides[closestIndex].getBoundingClientRect().left -
            carousel.getBoundingClientRect().left,
        );
        return distance < closestDistance ? slideIndex : closestIndex;
      },
      0,
    );

    setActiveIndex(index);
  }

  function scrollToImage(index: number) {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index];
    if (!carousel || !slide) return;

    carousel.scrollTo({
      left:
        carousel.scrollLeft +
        slide.getBoundingClientRect().left -
        carousel.getBoundingClientRect().left,
      behavior: "smooth",
    });
  }

  function showPreviousImage() {
    scrollToImage(activeIndex - 1);
  }

  function showNextImage() {
    scrollToImage(activeIndex + 1);
  }

  return (
    <>
      <div className="image-carousel-wrap">
        <button
          className="carousel-arrow carousel-arrow--previous"
          type="button"
          aria-label="Previous screenshot"
          disabled={activeIndex === 0}
          onClick={showPreviousImage}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div
          className="image-carousel"
          ref={carouselRef}
          role="region"
          aria-label={`${label} screenshots`}
          tabIndex={0}
          onScroll={updateActiveImage}
        >
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`${label} screenshot ${index + 1}`}
              width={320}
              height={180}
            />
          ))}
        </div>
        <button
          className="carousel-arrow carousel-arrow--next"
          type="button"
          aria-label="Next screenshot"
          disabled={activeIndex === images.length - 1}
          onClick={showNextImage}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="carousel-dots" role="group" aria-label="Choose screenshot">
        {images.map((image, index) => (
          <button
            key={image}
            className="carousel-dot"
            type="button"
            aria-label={`Show screenshot ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => scrollToImage(index)}
          />
        ))}
      </div>
    </>
  );
}
