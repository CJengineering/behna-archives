import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import {
  AwaitedReactNode,
  Fragment,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { AirtableRecord, ArrayProps, CollectionItemProps } from "@/interfaces";
import { getData } from "@/lib/getData";
import { getRecordByTitle } from "@/lib/getRecordByTitle";
import { transformDataToDetailedPoster } from "@/lib/transformDataToDetailedPoster";
import { extractImages } from "@/lib/extractImages";
import { transformDataToProducts } from "@/lib/transformDataToProducts";
import Link from "next/link";
import findSurroundingTitles from "@/lib/findSurroundingTitle";
import { filterByMovieId } from "@/lib/filterByMovieId";
import { transformToRelatedNames } from "@/lib/transformToRelatedNames";

export const extractSlugs = (records: AirtableRecord[]): string[] => {
  return records
    .map((record) => record.fields.Slug)
    .filter((slug) => slug != null);
};

async function CollectionItemDesktop({ slug }: CollectionItemProps) {
  const data = await getData("Posters");
  const actorsRawData = await getData("Actors");
  const writersRawData = await getData("Writers");
  const directorsRawData = await getData("Directors");

  const titles = extractSlugs(data);

  const posterRaw = await getRecordByTitle(data, slug);
  const movieId = posterRaw?.fields?.Films?.[0] ?? "";

  const relatedActors = filterByMovieId(actorsRawData, movieId);
  const realtedWirter = filterByMovieId(writersRawData, movieId);
  const relatedDirectors = filterByMovieId(directorsRawData, movieId);

  const relatedActorsNames = relatedActors.map((item) =>
    transformToRelatedNames(item)
  );
  const relatedDirectorsNames = relatedDirectors.map((item) =>
    transformToRelatedNames(item)
  );
  const relatedWritersNames = realtedWirter.map((item) =>
    transformToRelatedNames(item)
  );

  const product = transformDataToDetailedPoster(posterRaw);

  const images = product?.productionCompany
    ? extractImages(data, product?.productionCompany, product?.name)
    : [];
  const links = findSurroundingTitles(titles, slug);

  const products = transformDataToProducts(data);

  const productionCompany = product?.productionCompany;
  const excludeProductName = product?.name;
  const relatedProducts = products.filter(
    (product) =>
      product.imageSrc &&
      product.href &&
      product.description === productionCompany &&
      product.name !== excludeProductName
  );
  console.log(relatedProducts, product);

  return (
    <div className="hidden max-w-[1700px] max-h-[100dvh] mx-auto md:grid md:pb-6 md:grid-cols-2 md:gap-4">
      {/* Image Section */}

      <div className="poster-container">
        <div className=" ">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center py-6">
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
                        className="text-sm plexMono text-gray-900"
                      >
                        {breadcrumb.name}
                      </a>
                      {index < product.breadcrumbs.length - 1 && (
                        <ChevronRightIcon className="w-5 h-5 text-gray-300 mx-2" />
                      )}
                    </li>
                  )
                )}
            </ol>
          </nav>
          <img
            src={product?.imageUrl}
            alt={product?.imageAlt}
            className="poster"
          />
          <div className="flex py-3 space-x-0">
            <Link
              href={`${links.previous}`}
              className="h-12 w-12 mr-3 flex justify-center items-center bg-black text-white"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Link>
            <Link
              href={`${links.next}`}
              className="h-12 w-12 flex justify-center items-center bg-black text-white"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="px-4 pt-16 flex flex-col h-[100dvh] overflow-y-scroll">
        <h1 className="text-4xl font-bold text-gray-900 font-ibmSans">
          {product?.name}
        </h1>
        <div className="my-4 border-b border-gray-300"></div>
     
        {product?.yearProduced && product?.yearProduced !== "N/A" && (
          <>
            <p className="text-sm text-gray-500 font-ibmMono">YEAR PRODUCED</p>
            <p className="text-base text-gray-900 plexSans mb-4">
              {product?.yearProduced}
            </p>
          </>
        )}
     {product?.synopsis && product?.synopsis !== "N/A" && (
          <>
            
            <p className="text-sm text-gray-500 font-ibmMono">SYNOPSIS</p>
            <p className="text-base text-gray-900 plexSans mb-4">
              {product?.synopsis
              }
            </p>
          </>
        )}

        {relatedDirectorsNames.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 font-ibmMono">DIRECTOR(S)</p>
            <div className="flex flex-wrap">
              {relatedDirectorsNames.map((actor, index) => (
                <span
                  key={actor.name}
                  className="text-base text-gray-900 font-ibmSans whitespace-nowrap mr-1"
                >
                  {actor.name}
              
                </span>
              ))}
            </div>
          </div>
        )}
        {relatedWritersNames.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 font-ibmMono">WRITER(S)</p>
            <div className="flex flex-wrap">
              {relatedWritersNames.map((actor, index) => (
                <span
                  key={actor.name}
                  className="text-base text-gray-900 font-ibmSans whitespace-nowrap mr-1"
                >
                  {actor.name}
                
                </span>
              ))}
            </div>
          </div>
        )}
        {relatedActorsNames.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 font-ibmMono">ACTOR(S)</p>
            <div className="flex flex-wrap">
              {relatedActorsNames.map((actor, index) => (
                <span
                  key={actor.name}
                  className="text-base text-gray-900 font-ibmSans whitespace-nowrap mr-1"
                >
                  {actor.name}
                
                </span>
              ))}
            </div>
          </div>
        )}
              {product?.productionCompany && product?.productionCompany !== "N/A" && (
          <>
            <p className="text-sm text-gray-500 font-ibmMono">
              PRODUCTION COMPANY
            </p>
            <p className="text-base text-gray-900 plexSans mb-4">
              {product?.productionCompany}
            </p>
          </>
        )}
        {(product?.width && product?.width !== "N/A") ||
        (product?.height && product?.height !== "N/A") ? (
          <>
            <p className="text-sm text-gray-500 font-ibmMono">DIMENSIONS</p>
            {product?.width && product?.width !== "N/A" && (
              <p className="text-base text-gray-900 font-ibmSans">
                L {product?.width}cm
              </p>
            )}
            {product?.height && product?.height !== "N/A" && (
              <p className="text-base text-gray-900 font-ibmSans mb-4">
                W {product?.height}cm
              </p>
            )}
          </>
        ) : null}

        <>
          {relatedProducts.length > 0 && (
            <>
              <div className="my-4 border-b border-gray-300"></div>

              <h3 className="text-sm text-gray-500 plexMono">RELATED</h3>
              <div className=" h-[80%] w-full">
                <div
                  className="masonry-grid3 w-full pb-6"
                  style={{ maxWidth: "100%" }}
                >
                  {products
                    .filter(
                      (product) =>
                        product.imageSrc &&
                        product.href &&
                        product.description === productionCompany &&
                        product.name !== excludeProductName
                    )
                    .map((product) => (
                      <div className="block" key={product.id}>
                        <Link
                          key={product.id}
                          href={product.slug}
                          className="masonry-item group block"
                        >
                          <div className="w-full mt-6 overflow-hidden rounded-lg">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="w-full h-auto object-cover object-center hover:scale-95 transform transition-transform duration-150"
                            />
                            <div className="mt-1 flex justify-between items-center text-base font-medium text-gray-900">
                              <h3 className="font-ibmSans">{product.name}</h3>
                              <p className="font-ibmSans">{product.price}</p>
                            </div>
                            <p className="mb-4 text-xs plexMono text-gray-700 md:text-sm">
                              {product.description}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
}

export default CollectionItemDesktop;
