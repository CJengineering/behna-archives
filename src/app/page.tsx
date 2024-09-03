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
                        className="w-full h-auto object-cover object-center hover:scale-95 transform transition-transform duration-150"
                      />
                    </div>
                  </Link>
                ))}
            </div>

            <div className="hidden  md:block">
              {imagesHome.map((image) => (
                <Link
                  key={image.id}
                  href={`collection/${image.slug}`}
                  className="masonry-item group block"
                >
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.slug}
                      className="w-full h-auto object-cover object-center hover:scale-95 transform transition-transform duration-150"
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
          <Link
            href={"/collection"}
            className="inline-flex items-center gap-x-2 mt-4 rounded-md plexMono bg-black px-6 py-4 text-sm text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <EyeIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            <span>Explore</span>
          </Link>
        </div>
      </section>
      <section className="max-w-[1700px] mx-auto">
        <div className="my-4 border-b border-gray-300"></div>
        <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2 gap-4">
          <div className="text-column">
            <h2 className="text-3xl font-bold m-0 text-gray-900 font-ibmSans md:pb-2">
              What are the Behna Digital Archives
            </h2>
            <p className="py-2 font-ibmSans">
              Moving images captivated the world in the early 1900s, marking the
              emergence of cinema as a global cultural phenomenon.
            </p>
            <p className="py-2 font-ibmSans">
              In the 1920s, Alexandria saw the founding of Sélection&apos;s
              Behna Films by three brothers, Edouard, Michel, and George&apos;s
              Behna, just as the city was becoming a centre for Egypt&apos;s
              burgeoning film industry. An historic centre of scholarship,
              trade, and culture since the Ptolemaic dynasty, Alexandria
              regained its status as the pride of the Mediterranean and a hub
              for the arts following a cultural renaissance in the 19th century.
              This thriving trading post, inhabited by a cosmopolitan mosaic of
              cultures, became a focal point for the emerging film industry.
            </p>
            <p className="hidden md:block py-2 font-ibmSans">
              In 1932, the Behna brothers co-produced &apos;Onshoudat
              al-Fouad&apos; with Nahas Sphynx Film, the first Egyptian musical
              film, and in 1936, they launched into film distribution and
              distributed in the same year the first Egyptian animated film
              &apos;Mish Mish Effendi,&apos; before transitioning to film
              distribution. They quickly became the main distributors of
              Egyptian films in the Arab world, with offices in Alexandria,
              Cairo, Baghdad, Khartoum, Beirut, and Damascus. Sélections Behna
              Films participated in many iconic films in the history of Egyptian
              cinema, including works by Assia, Marie-Queen, Ahmed Galal, comedy
              icon Ismail Yassin, and composer-actor Mohamed Fawzy.
            </p>
            <p className="py-2 font-ibmSans">
              Following the 1952 revolution and the widespread campaign of
              nationalization, Sélections Behna Films was compelled to cease
              operations in 1961. After prolonged legal battles, the heirs to
              this former cinematic empire, Basile Behna and his sisters, sought
              to reclaim the assets of their expropriated company. During this
              time, Basile Behna, as a prominent art collector who possessed a
              diverse art collection, embarked on building his own cinema
              collection that chronicled his family&apos;s rich heritage. He
              meticulously acquired pieces from antiquities markets and other
              collectors to reflect the long and storied history of Sélections
              Behna Films.
            </p>
            <p className="py-2 hidden md:block font-ibmSans">
              A collaboration between Wekalet Behna (Basile Behna), Community
              Jameel and ARCHiVe (Factum Foundation and Fondazione Giorgio
              Cini), the Behna Digital Archive began as a digitisation project
              to preserve Wekalet Behna&apos;s treasured early 20th-century
              poster collection. Today it is a platform dedicated to celebrating
              and preserving Egyptian cinema history.
            </p>
            <p className="py-2 hidden md:block font-ibmSans">
              The collection offers a rare and precious testimony to the golden
              era of Egyptian cinema. As an accessible, digital archive, it aims
              to serve as a tool for film lovers, producers, researchers, and
              graphic designers globally.
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
        <div className="flex flex-col justify-center items-center  md:flex-row md:space-x-12">
          <Image src={behnaLogo} alt="" className="py-4 w-36" />
          <Image src={cjLogo} alt="" className="py-4 w-48" />
          <Image src={factumLogo} alt="" className="py-4 w-64" />
          <Image src={fonazione} alt="" className="py-4 w-52" />
        </div>
      </section>
    </div>
  );
}
