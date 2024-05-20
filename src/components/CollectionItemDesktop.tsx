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
import { CollectionItemProps } from "@/interfaces";
import { getData } from "@/lib/getData";
import { getRecordByTitle } from "@/lib/getRecordByTitle";
import { transformDataToDetailedPoster } from "@/lib/transformDataToDetailedPoster";
import { extractImages } from "@/lib/extractImages";
import { transformDataToProducts } from "@/lib/transformDataToProducts";
import Link from "next/link";
import findSurroundingTitles from "@/lib/findSurroundingTitle";
import { titles } from "@/lib/dataLinks";

async function CollectionItemDesktop({ slug }: CollectionItemProps) {
  const data = await getData();
  const posterRaw = getRecordByTitle(data, slug);
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
      product.description === productionCompany &&
      product.name !== excludeProductName
  );

  return (
    <div className="hidden max-w-[1700px] max-h-[90vh] mx-auto md:grid md:grid-cols-2 md:gap-4">
      {/* Image Section */}
      <div className="poster-container  ">
        <div className=" ">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center  py-6">
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
          <img
            src={product?.imageUrl}
            alt={product?.imageAlt}
            className="poster "
          />
          <div className="flex space-x-3">
            <Link
              href={`${links.previous}`}
              className="h-12 w-12 mr-3 flex justify-start items-center bg-slate-400 text-white"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Link>
            <Link
              href={`${links.next}`}
              className="h-12 w-12 flex justify-end items-center bg-slate-400 text-white"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
          </div>
          <div className="absolute  bottom-4  "></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="px-4 pt-16 flex flex-col h-[90vh]  ">
        <h1 className="text-2xl font-bold text-gray-900 font-ibmSans">
          {product?.name}
        </h1>
        <div className="my-4 border-b border-gray-300"></div>
        <p className="text-sm text-gray-500 font-ibmMono">PRODUCTION COMPANY</p>
        <p className="text-base text-gray-900 font-ibmSans">
          {product?.productionCompany}
        </p>
        <p className="text-sm text-gray-500 font-ibmMono">YEAR PRODUCED</p>
        <p className="text-base text-gray-900 font-ibmSans">
          {product?.yearProduced}
        </p>
        <p className="text-sm text-gray-500 font-ibmMono">SCREENED</p>
        <p className="text-base text-gray-900 font-ibmSans">
          {product?.screen}
        </p>
        {product?.cast && (
          <>
            <p className="text-sm text-gray-500 font-ibmMono">CAST</p>
            <p className="text-base text-gray-900 font-ibmSans">
              {product?.cast}
            </p>
          </>
        )}
        <p className="text-sm text-gray-500 font-ibmMono">DIMENSIONS</p>
        <p className="text-base text-gray-900 font-ibmSans">
          L {product?.width}cm
        </p>
        <p className="text-base text-gray-900 font-ibmSans">
          W {product?.height}cm
        </p>
        <>
        {relatedProducts.length > 0 && (
          <>
                 <div className="my-4 border-b border-gray-300"></div>

                 <h3 className="text-sm text-gray-500 font-ibmMono">RELATED</h3>
                 <div className=" h-[80%] w-full overflow-y-scroll">
                   <div className="masonry-grid3 w-full" style={{ maxWidth: "100%" }}>
                     {products
                       .filter(
                         (product) =>
                           product.imageSrc &&
                           product.description === productionCompany &&
                           product.name !== excludeProductName
                       )
                       .map((product) => (
                         <div className="block"    key={product.id}>
                           <Link
                             key={product.id}
                             href={product.slug}
                             className="masonry-item group block"
                           >
                             <div className="w-full overflow-hidden rounded-lg">
                               <img
                                 src={product.imageSrc}
                                 alt={product.imageAlt}
                                 className="w-full h-auto object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-75"
                               />
                               <div className="mt-4 flex justify-between items-center text-base font-medium text-gray-900">
                                 <h3>{product.name}</h3>
                                 <p>{product.price}</p>
                               </div>
                               <p className="mt-1 text-sm italic text-gray-500">
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
