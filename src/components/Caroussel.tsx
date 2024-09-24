"use client";
import { ImageRelated } from "@/interfaces";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

interface CarouselProps {
  images: ImageRelated[];
}
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3.5; // For visual effect, not as an integer

  const goToNext = () => {
    if (images.length > 3) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const goToPrev = () => {
    if (images.length > 3) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const getSlideImages = () => {
    let slides = [];
    let totalImages =
      images.length > 3 ? Math.ceil(visibleItems) : images.length;
    for (let i = 0; i < totalImages; i++) {
      let index = (currentIndex + i) % images.length;
      slides.push(images[index]);
    }
    return slides;
  };

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div className="flex w-full justify-start overflow-hidden py-4 space-x-2">
        {getSlideImages().map((image, index) => (
          <Link key={index} href={image.slug}>
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`block h-auto transition-opacity duration-300 ease-in-out ${
                index === Math.ceil(visibleItems) - 1
                  ? "w-[150px]"
                  : "w-[150px]"
              }`}
            />
            <span className="text-sm text-gray-900 plexSans font-semibold"> {image.alt}</span>
          </Link>
        ))}
      </div>
      {images.length > 3 && (
        <div className="flex justify-end gap-x-3 w-full pb-3 ">
          <button
            onClick={goToPrev}
            className="p-2 bg-black text-white rounded-l"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 bg-black text-white rounded-r"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
