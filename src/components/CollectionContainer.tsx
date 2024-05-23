import React from "react";
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
  const data = await getData();
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
                    className="w-full h-auto object-cover object-center hover:scale-105 transform transition-transform duration-150"
                  />
                </div>
                <div className="mt-1 flex justify-between items-center text-sm font-medium text-black-900 md:text-base">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <p className="text-xs italic text-gray-700 md:text-sm">
                  {product.description}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
