"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { RotatingLines } from "react-loader-spinner";
interface MainImageCompProps {
  productImage: string;
  productAlt: string;
  linkPrevious: string;
  linkNext: string;
}

export default function MainImageMobileComponent({
  productImage,
  productAlt,
  linkPrevious,
  linkNext,
}: MainImageCompProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <div className=" ">
      <div className="w-full relative p-3 h-[dvh-80] ">
        {!isLoaded && (
          <div className=" absolute left-1/2 bottom-1/2 ">
            <RotatingLines
              strokeColor="#000"
              strokeWidth="5"
              animationDuration="1"
              width="50"
            ></RotatingLines>
          </div>
        )}

        {isLoaded && (
          <Link
            href={`${linkNext}`}
            className="w-12 opacity-0 transition-opacity duration-200 ease-in-out absolute right-0 bottom-1/2 pr-3"
            style={{ opacity: isLoaded ? 1 : 0 }}
          >
            <ChevronRightIcon />
          </Link>
        )}
        {isLoaded && (
          <Link
            href={`${linkPrevious}`}
            className="w-12 transition-opacity duration-200 ease-in-out opacity-0 absolute left-[-4px] bottom-1/2 flex justify-start pl-3"
            style={{ opacity: isLoaded ? 1 : 0 }}
          >
            <ChevronLeftIcon className="w-12" />
          </Link>
        )}

        <Image
          src={productImage}
          alt={productAlt}
          className="poster transition-opacity opacity-0 duration-[1s] ease-in-out"
          onClick={() => setIsLightboxOpen(true)}
          onLoad={(e: any) => {
            e.target.classList.remove("opacity-0");
            setIsLoaded(true);
          }}
          width={200}
          height={200}
        />
      </div>
      {isLoaded && (
        <div className="flex py-3 space-x-0">
          <Link
            href={`${linkPrevious}`}
            className="h-12 w-12 mr-3 flex justify-center items-center bg-black text-white"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Link>
          <Link
            href={`${linkNext}`}
            className="h-12 w-12 flex justify-center items-center bg-black text-white"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </Link>
        </div>
      )}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center hover:cursor-pointer items-center z-50"
          onClick={() => setIsLightboxOpen(false)} // Close lightbox when clicking on background
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing lightbox when clicking on the image
          >
            <Image
              src={productImage}
              alt={productAlt}
              width={800}
              height={800}
              className="max-h-[80vh] w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
