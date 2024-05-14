
import { getData } from "@/lib/getData";
import { getRecordByTitle } from "@/lib/getRecordByTitle";
import { transformDataToDetailedPoster } from "@/lib/transformDataToDetailedPoster";
import { useState } from "react";
interface CollectionItemProps {
    title: string;
  }

const product = {
  name: "The Blue Elephant",
  price: "2014",
  href: "#",
  breadcrumbs: [

    { id: 2, name: "Posters", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],

  description: "New Century Production",
  highlights: [
    "Karim Abdel Aziz as Yehia",
    "Khaled El Sawy as Sherif Al Kordy",
    "Nelly Karim as Lobna",
    "Dareen Haddad as Farah",
  ],
  details:
    "The Blue Elephant tells the story of a psychiatrist who finds himself pulled back to his former job at the Abbasiya Mental Hospital after a five-year hiatus, and embarks on a thrilling journey to help his friend who is accused of murder. Directed by Marwan Hamed and based on the novel by Ahmed Mourad, this film is a gripping psychological thriller that dives deep into the mysteries of the human psyche.",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function CollectionItem({title}:CollectionItemProps) {
    const data = await getData()
    const posterRaw = getRecordByTitle(data,title)
    const poster = transformDataToDetailedPoster(posterRaw)

  return (
    <div className="bg-white  ">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-7xl items-center space-x-2 px-4 sm:px-6 lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={"/"}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={poster?.images[0].src || "#"}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {poster?.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image and Product Info */}
        <div className="mx-auto mt-16 max-w-7xl sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-4 aspect-h-3 col-span-8 overflow-hidden rounded-lg">
            <img
              src={poster?.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="px-4  col-span-4 lg:px-8 lg:pb-24 ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {poster?.name}
            </h1>

            <div className="py-10">
              <h3 className="sr-only">Production</h3>
              <div className="space-y-1">
                <p className="text-base text-gray-900">{product.description}</p>
                <p className="text-base text-gray-900">{poster?.year}</p>
               
              </div>

              <div className="mt-10">
             {/*    <h3 className="text-sm font-medium text-gray-900">Details</h3> */}
                {/* <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
