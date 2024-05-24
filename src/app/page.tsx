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
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { EyeIcon } from "@heroicons/react/24/outline";

import LogoCommunity from "@/components/LogoCommunity";
import { getDataMax4 } from "@/lib/getDataMax4";
import { imagesHome } from "@/lib/dataHardCoded/imagesHome";

export default async function Home() {
  

  return (
    <div>
      <section className="">
      <div className="relative py-24 md:py-48 items-center">
          <div className="relative flex items-center px-12 justify-center h-full z-20">
            <h1 className="text-center text-3xl md:text-5xl text-black font-bold plexSans">
              Preserving the cultural legacy of Egyptian cinema
            </h1>
          </div>
        </div>
        <div className="w-full px-4 md:max-w-[1700px] items-center mx-auto   ">
          <div className="masonry-grid" style={{ maxWidth: "100%" }}>
            <div className="block md:hidden">
              {imagesHome
                .filter((image, index) => index > 3)
                .map((image) => (
                  <Link
                    key={image.id}
                    href={`collection/${image.slug}`}
                    className="masonry-item group block"
                  >
                    <div className="w-full overflow-hidden rounded-lg">
                      <img
                        src={image.url}
                        alt={image.slug}
                        className="w-full h-auto object-cover object-center hover:scale-105 transform transition-transform duration-150"
                      />
                    </div>
                  </Link>
                ))}
            </div>

            <div className="hidden md:block">
              {imagesHome
                
                .map((image) => (
                  <Link
                    key={image.id}
                    href={`collection/${image.slug}`}
                    className="masonry-item group block"
                  >
                    <div className="w-full overflow-hidden rounded-lg">
                      <img
                        src={image.url}
                        alt={image.slug}
                        className="w-full h-auto object-cover object-center hover:scale-105 transform transition-transform duration-150"
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" mx-auto">
        <div className=" py-8 flex justify-center align-middle">
          <Link href={"/collection"}>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 mt-4 rounded-md plexMono bg-black px-6 py-4 text-sm text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Explore
              <EyeIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </section>
      <section className="max-w-[1700px] mx-auto">
        <div className="my-4 border-b border-gray-300"></div>
        <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2 gap-4">
          <div className="text-column">
            <h2 className="text-3xl font-bold m-0 text-gray-900 font-ibmSans md:pb-2">
              What are Behna Archives?
            </h2>
            <p className="py-2 font-ibmSans">
        Founded by Alexander the Great in 331 BC and developed by the Ptolemaic dynasty, Alexandria was a centre of scholarship, trade, and culture. Its prominence ended in 31 BC when the Romans took over, making it a provincial town. Alexandria saw a revival in the 19th century under governor Muhammad Ali Pasha, regaining its status as the bride of the Mediterranean.
      </p>
      <p className="py-2 font-ibmSans">
        Sélection Behna Films was established in the late 1920s by brothers Michael and George Behna. They produced Egypt&apos;s first musical and animated films before becoming leading distributors in the Arab world (with offices in Alexandria, Cairo, Baghdad, Khartoum, Beirut, and Damascus). They contributed to many iconic Egyptian films, including those featuring Ismail Yassin and Mohamed Fawzy.
      </p>
      <p className="py-2 font-ibmSans">
        Sélection Behna Films closed in 1961 due to nationalisation after the 1952 revolution. In 2012, Basile and Marie-Claude Behna regained access to Wekalet Behna, the agency&apos;s abandoned premises. They restored over 180 metres of archives documenting three decades of film production and distribution.
      </p>
      <p className="py-2 font-ibmSans">
        A collaboration between Wekalet Behna, Community Jameel, and ARCHiVe, the Behna Digital Archive project was launched to digitise and preserve early 20th-century posters. This archive, a testament to the golden age of Egyptian cinema, aims to inspire producers, designers, and film enthusiasts.
      </p>
            <div className="w-auto">
              <Link href={"/about"}>
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 mt-4 rounded-md plexMono bg-black px-6 py-4 text-sm text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Learn more
                  <ArrowRightIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </Link>
            </div>
          </div>
          <div className="column-image hidden md:block md:align-top">
      <img
        src="https://storage.googleapis.com/behna-archives/3_AAMTFC_1948_A%20girl%20from%20Palestine.webp"
        alt=""
        className="self-end"
      />
    </div>
        </div>
        <div className="my-4 px-24 border-b border-gray-300"></div>
      </section>
      <section className="px-4 md:max-w-[1700px] mx-auto pt-4 pb-24 font-ibmMono">
        <h2 className="text-3xl font-bold m-0 text-gray-900 font-ibmSans mb-2">
          Supported by
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <Image src={cjLogo} alt="" className="py-4 w-48" />
          <Image src={factumLogo} alt="" className="py-4 w-64" />
          <Image src={fonazione} alt="" className="py-4 w-52" />
          <Image src={behnaLogo} alt="" className="py-4 w-36" />
        </div>
      </section>
    </div>
  );
}
