"use client";

import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
interface MainImageCompProps {
  productImage: string;
  productAlt: string;
  linkPrevious: string;
  linkNext: string;
}

export default function MainImageComp({
  productImage,
  productAlt,
  linkPrevious,
  linkNext,
}: MainImageCompProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <div className=" ">
      {!isLoaded && (
        <div className="flex justify-center items-center h-[50vh] ">
          <RotatingLines
            strokeColor="#000"
            strokeWidth="5"
            animationDuration="1"
            width="50"
          ></RotatingLines>
        </div>
      )}

      <Image
        src={productImage}
        alt={productAlt}
        className="poster  transition-opacity opacity-0 duration-[1s] hover:cursor-pointer ease-in-out"
        onClick={() => setIsLightboxOpen(true)}
        onLoad={(e: any) => {
          e.target.classList.remove("opacity-0");
          setIsLoaded(true);
        }}
        width={400}
        height={400}
      />
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
