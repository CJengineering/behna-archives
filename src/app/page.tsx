import Button from "@/components/Button";
import CollectionContainer from "@/components/CollectionContainer";
import CollectionItem from "@/components/CollectionItem";
import Navbar from "@/components/Navbar";
import { getData } from "@/lib/getData";
import { transformDataToProducts } from "@/lib/transformDataToProducts";
import cjLogo from "../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../public/svg/WEKALAT_BEHNA_LOGO.svg";
import { ReactSVG } from "react-svg";
import nextLogo from "../../public/next.svg";

import Image from "next/image";
import Link from "next/link";

import LogoCommunity from "@/components/LogoCommunity";

export default async function Home() {
  const data = await getData();
  const products = transformDataToProducts(data);
  return (
    <div>
      <section className=" h-[100vh]  ">
        <div className="relative h-[40vh]">
          <img
            src="https://storage.googleapis.com/behna-archives/00_THUMBNAILS/134_LC_1952_Time%20of%20Wonders_THUMBNAIL.webp"
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
          <div className="relative flex items-center justify-center h-full z-20">
            <h1 className="text-white text-center md:w-1/4 text-xl md:text-4xl font-bold font-ibmSans">
              Preserving Egyptian cinema’s cultural legacy
            </h1>
          </div>
        </div>
        <div className="  top-[40vh] h-[70vh] left-8 right-8   max-w-[980px]   md:h-[65vh] absolute  md:inset-[40vh] mx-auto z-40 overflow-hidden">
          <div className="masonry-grid w-full" style={{ maxWidth: "100%" }}>
            {products
              .filter((product) => product.imageSrc)
              .map((product) => (
                <Link
                  key={product.id}
                  href={`${product.slug}`}
                  className="masonry-item group block"
                >
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-auto object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center text-base font-medium text-gray-900">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm italic text-gray-500">
                    {product.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <section className=" mx-auto">
        <div className=" py-8 flex justify-center align-middle ">
          <Button text={"Explore"}></Button>
        </div>
      </section>
      <section className=" max-w-[980px] mx-auto ">
        <div className="my-4 border-b border-gray-300"></div>
        <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2">
          <div className="text-colmn">
            <h2 className="text-3xl font-bold m-0 text-gray-900 font-ibmSans ">
              What are Behna Archives?
            </h2>
            <p className="py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ullam
              placeat, ab deleniti porro expedita cumque? Nesciunt, non
              exercitationem sapiente iste pariatur placeat tempora accusamus
              optio sed quas quos similique.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cumque a, iure architecto molestiae harum dignissimos, suscipit
              necessitatibus impedit obcaecati recusandae voluptatum esse
              deserunt magni quam corporis? Est, magnam sit.
            </p>
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              ipsum placeat laudantium, nisi, maiores illum tempora fugiat nulla
              officia dicta a ut consequuntur, libero hic? Atque quaerat esse
              quas ratione.
            </p>
            <div className="w-auto">
              <Link className="custom-link hover:cursor-pointer w-28 " href={'/about'}>Learn more -{">"}</Link>
            </div>
          </div>

          <div className="column-image hidden md:block">
            <img
              src="https://storage.googleapis.com/behna-archives/00_THUMBNAILS/37_UAF_1947_Cairo%20Baghdad_THUMBNAIL.webp"
              alt=""
            />
          </div>
        </div>
        <div className="my-4 border-b border-gray-300"></div>
      </section>
      <section className=" px-4  md:w-[980px] mx-auto py-4 font-ibmMono">
        <h2 className="p-2 font-ibmMono font-semibold ">Sorted by</h2>
        <div className="flex flex-col px-4 md:flex-row space-x-6">
          <Image src={cjLogo} alt="" className=" py-2 w-48"  />

          <Image src={factumLogo} alt="" className=" py-2 w-48" />
          <Image src={fonazione} alt="" className="py-2 w-48" />
          <Image src={behnaLogo} alt="" className="py-2 w-48" />
        </div>
      </section>
    </div>
  );
}
