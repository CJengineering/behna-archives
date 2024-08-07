import React, { act } from "react";
import { getData } from "../lib/getData";
import { transformDataToProducts } from "../lib/transformDataToProducts";
import Link from 'next/link'
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
    <div className="max-w-full mx-auto px-4 md:pb-16 lg:max-w-full lg:px-8">
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
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-auto object-cover object-center hover:scale-95 transform transition-transform duration-150"
                  />
                </div>
                <div className="mt-1 flex justify-between items-center text-sm font-medium text-black-900 md:text-base">
                  <h3 className="font-ibmSans">{product.name}</h3>
                  <p className="font-ibmSans">{product.price}</p>
                </div>
                <p className="plexMono text-xs text-gray-700 md:text-sm">
                  {product.description}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
