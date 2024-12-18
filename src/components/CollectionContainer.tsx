import React, { act } from "react";
import { getData } from "../lib/getData";
import { transformDataToProducts } from "../lib/transformDataToProducts";
import Link from 'next/link'
import Image from "next/image";
function createSlug(text: string) {
    return text
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-'); // Replace multiple - with single -
  }

export default async function CollectionContainer() {
  const data = await getData('Posters');
  const dataRawActors = await getData('Actors');
  const dataWriter = await getData('Writers');
  const dataDirector = await getData('Directors');
  const products = transformDataToProducts(data);


  return (
    <div className="max-w-full pb-12 mx-auto px-4 md:pb-16 lg:max-w-full lg:px-8">
      <div className="mt-6 flex justify-center">
        <div className="masonry-grid w-full" style={{ maxWidth: "100%" }}>
       

       
          {products
            .filter((product) => product.imageSrc)
            .map((product) => (
              <Link
                key={product.id}
                href={`collection/${product.slug}`}
                className="masonry-item group block"
              >
        <div className="relative group w-full h-auto object-cover object-center">
      <Image
        src={product.imageSrc}
        alt={product.imageAlt ? product.imageAlt : product.name}
        className="w-full h-auto object-cover object-center transition-all duration-[2000ms] ease-in-out blend-normal group-hover:blend-multiply"
        width={400}
        height={400}
      />
      {/* Gradient background with slow transition */}
      <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-25 transition-opacity duration-[2000ms] ease-in-out pointer-events-none"></div>
    </div>
                <div className="mt-1 flex justify-between  text-sm font-medium text-black-900 md:text-base">
                  <h3 className="font-ibmSans">{product.name}</h3>
                  <p className="font-ibmSans">{product.price}</p>
                </div>
                {/* <p className="plexMono text-xs text-gray-700 md:text-sm">
                  {product.description}
                </p> */}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
