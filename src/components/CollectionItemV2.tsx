import { ChevronRightIcon } from "@heroicons/react/16/solid";
import {
  AwaitedReactNode,
  Fragment,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Caroussel from "./Caroussel";
import { CollectionItemProps } from "@/interfaces";
import { getData } from "@/lib/getData";
import { getRecordByTitle } from "@/lib/getRecordByTitle";
import { transformDataToDetailedPoster } from "@/lib/transformDataToDetailedPoster";
import { extractImages } from "@/lib/extractImages";

async function CollectionItem({ slug }: CollectionItemProps) {
const data = await getData();

  const posterRaw = await getRecordByTitle(data, slug);
  const product = transformDataToDetailedPoster(posterRaw);
  const images = product?.productionCompany
    ? extractImages(data, product?.productionCompany, product?.name)
    : [];
console.log('images',images)
  return (
    <div className="bg-white">
      {/* <div className="w-full bg-gray-100">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center px-4 py-2">
            {product?.breadcrumbs &&
              product.breadcrumbs.map(
                (
                  breadcrumb: {
                    id: Key | null | undefined;
                    href: string | undefined;
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | null
                      | undefined;
                  },
                  index: number
                ) => (
                  <li key={breadcrumb.id} className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    {index < product.breadcrumbs.length - 1 && (
                      <ChevronRightIcon className="w-5 h-5 text-gray-500 mx-2" />
                    )}
                  </li>
                )
              )}
          </ol>
        </nav>
      </div> */}

      {/* Image Section */}
      <div className="w-full h-[dvh-80]">
        <img
          src={product?.imageUrl}
          alt={product?.imageAlt}
          className="w-full"
        />
      </div>

      {/* Title and Details */}
      <div className="px-4 pt-2 pb-6">
        <h1 className="text-2xl font-bold text-gray-900 plexSans">
          {product?.name}
        </h1>
        <div className="my-4 border-b border-gray-300"></div>

        <div className="text-sm text-gray-500 mt-4 plexMono">
          <p>PRODUCTION COMPANY</p>
          <p className="text-base text-gray-900 plexSans">
            {product?.productionCompany}
          </p>
        </div>
        <div className="text-sm text-gray-500 mt-4 plexMono">
          <p>YEAR PRODUCED</p>
          <p className="text-base text-gray-900 plexSans">
            {product?.yearProduced}
          </p>
        </div>
        <div className="text-sm text-gray-500 mt-4 plexMono">
          <p>SCREENED</p>
          <p className="text-base text-gray-900 plexSans">{product?.screen}</p>
        </div>
        {product?.cast && product?.cast.length > 0 ? (
          <div className="text-sm text-gray-500 mt-4 plexMono">
            <p>CAST</p>
            <p className="text-base text-gray-900 plexSans">{product?.cast}</p>
          </div>
        ) : null}

        <div className="text-sm text-gray-500 mt-4 plexMono">
          <p>DIMENSIONS</p>
          <p className="text-base text-gray-900 fplexSans">
            L {product?.width}cm
          </p>
          <p className="text-base text-gray-900 plexSans">
            W {product?.height}cm
          </p>
        </div>
      </div>
      <div className="px-4">
        {images.length > 0 && (
          <>
            <div className="my-4 border-b border-gray-300"></div>

            <div className="text-sm text-gray-500 mt-4 plexMono">
              <p>RELATED</p>
            </div>

            <Caroussel images={images}></Caroussel>
          </>
        )}
      </div>
    </div>
  );
}

export default CollectionItem;
