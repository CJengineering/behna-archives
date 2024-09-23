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

export default function MainImageMobileComponent({
  productImage,
  productAlt,
  linkPrevious,
  linkNext,
}: MainImageCompProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className=" ">
      <div className="w-full relative p-3 h-[dvh-80] ">
        {!isLoaded && (
          <div className=" absolute left-1/2 bottom-1/2 ">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-slate-500 border-solid"></div>
          </div>
        )}

        {isLoaded && (
          <Link
            href={`${linkNext}`}
            className="w-12 opacity-0 transition-opacity duration-200 ease-in-out absolute right-0 bottom-1/2"
            style={{ opacity: isLoaded ? 0.4 : 0 }}
          >
            <ChevronRightIcon />
          </Link>
        )}
        {isLoaded && (
          <Link
            href={`${linkPrevious}`}
            className="w-36 transition-opacity duration-200 ease-in-out opacity-0 absolute left-[-4px] bottom-1/2 flex justify-start"
            style={{ opacity: isLoaded ? 0.4 : 0 }}
          >
            <ChevronLeftIcon className="w-12" />
          </Link>
        )}

        <Image
          src={productImage}
          alt={productAlt}
          className="poster  transition-opacity opacity-0 duration-[1s] ease-in-out"
          onLoad={(e: any) => {
            e.target.classList.remove("opacity-0");
            setIsLoaded(true);
          }}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
