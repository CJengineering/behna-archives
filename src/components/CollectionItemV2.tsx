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
import Caroussel from "./Caroussel";
import { CollectionItemProps } from "@/interfaces";
import { getData } from "@/lib/getData";
import { getRecordByTitle } from "@/lib/getRecordByTitle";
import { transformDataToDetailedPoster } from "@/lib/transformDataToDetailedPoster";
import { extractImages } from "@/lib/extractImages";
import { filterByMovieId } from "@/lib/filterByMovieId";
import { extractSlugs } from "./CollectionItemDesktop";
import { transformToRelatedNames } from "@/lib/transformToRelatedNames";
import Image from "next/image";
import MainImageMobileComponent from "./MainImageMobileComponent";
import findSurroundingTitles from "@/lib/findSurroundingTitle";

async function CollectionItem({ slug }: CollectionItemProps) {
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
  const relatedImages = images.filter((image) => image.url !== "");
  console.log("images", images);

  const links = findSurroundingTitles(titles, slug);
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
      {/* <div className="w-full relative p-3 h-[dvh-80] ">
        <div className="w-12 opacity-40 absolute right-0 bottom-1/2">
          <ChevronRightIcon />
        </div>
        <div className="w-36 opacity-40 absolute left-[-4px]  bottom-1/2 bg-red-50 flex justify-start">
          <ChevronLeftIcon className="bg-blue-500 w-12 " />
        </div>
        <Image
          src={product?.imageUrl ? product.imageUrl : ""}
          alt={product?.imageAlt ? product.imageAlt : ""}
          className="w-full"
          width={500}
          height={500}
        />
      </div> */}
      <MainImageMobileComponent
        productImage={product?.imageUrl ? product.imageUrl : ""}
        productAlt={product?.imageAlt ? product.imageAlt : ""}
        linkPrevious={`${links.previous}`}
        linkNext={`${links.next}`}
      />

      {/* Title and Details */}

      <div className="px-4 pt-3">
        <h1 className="text-2xl font-bold text-gray-900 plexSans">
          {product?.name}
        </h1>
        <div className="my-6 border-b border-gray-300"></div>
        {  product?.arabicTitle && product?.arabicTitle !== "N/A"  && (
          <>
            <p className="text-sm text-gray-500 font-ibmMono">ORIGINAL TITLE</p>
            <p className="text-base text-gray-900 plexSans mb-4">
              {product?.arabicTitle}
            </p>
          </>
        )}

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
              {product?.synopsis}
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
                  {index < relatedDirectorsNames.length - 1 && ","}
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
                  {index < relatedWritersNames.length - 1 && ","}
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
                  {index < relatedActorsNames.length - 1 && ","}
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
            
                <p className="text-base text-gray-900 font-ibmSans ">
                W {product?.width} cm
              </p>
            )}
            {product?.height && product?.height !== "N/A" && (
              <p className="text-base text-gray-900 font-ibmSans mb-4">
              L {product?.height} cm
            </p>
            )}
          </>
        ) : null}
      </div>
      <div className="px-4">
        {relatedImages.length > 0 && (
          <>
            <div className="my-6 border-b border-gray-300"></div>

            <div className="text-xl font-bold text-gray-900 plexSans">
              <p>RELATED</p>
            </div>

            <Caroussel images={relatedImages}></Caroussel>
          </>
        )}
      </div>
    </div>
  );
}

export default CollectionItem;
