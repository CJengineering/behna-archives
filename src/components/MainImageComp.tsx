"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
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
  return (
    <div>
      {!isLoaded && (
        <div className="h-96 w-96 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-slate-500 border-solid"></div>
        </div>
      )}

      <Image
        src={productImage}
        alt={productAlt}
        className="poster transition-opacity opacity-0 duration-[1s] ease-in-out"
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
    </div>
  );
}
