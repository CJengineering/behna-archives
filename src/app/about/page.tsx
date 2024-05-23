import Button from "@/components/Button";
import cjLogo from "../../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../../public/svg/WEKALAT_BEHNA_LOGO.svg";
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { EyeIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import LogoCommunity from "@/components/LogoCommunity";
import Link from "next/link";

export default async function About() {

  return (
    <div>
      <section className="">
      <div className="relative py-24 px-6 md:py-48 items-center">
          <div className="relative flex items-center px-8 justify-center h-full z-20">
            <h1 className="text-center text-3xl md:text-5xl text-black font-bold plexSans">
              What are the Behna Archives?
            </h1>
          </div>
        </div>
       
      </section>

      <section className=" max-w-[1700px] mx-auto ">
    
      <div className="grid grid-cols-1 px-4 pb-8 md:grid-cols-2 md:gap-12 md:align-top">
    <div className="text-column">
      {/* <h2 className="text-3xl font-bold mb-4 text-gray-900 font-ibmSans">
        What are Behna Archives?
      </h2> */}
      <p className="py-2 font-ibmSans">
        Founded by Alexander the Great in 331 BC and nurtured by the Ptolemaic dynasty, Alexandria has long been a centre of scholarship, trade, and culture. Alexandria&apos;s grandeur and strategic significance ended in 31 BC as the Romans subjugated the realm of the Ptolemaic dynasty, reducing Alexandria to a provincial town in their Empire. Alexandria experienced a Renaissance in the 19th century, regaining its status as the bride of the Mediterranean, thanks to the influence of governor Muhammad Ali Pasha.
      </p>
      <p className="py-2 font-ibmSans">
        Sélection Behna Films was founded in the late 1920s by two brothers, Michael and George Behna, when the booming trading post inhabited by a cosmopolitan mosaic of cultures was also turning into a hub for an emerging film industry. In 1932, the Behna brothers produced Onshoudat al-Fouad, the first Egyptian musical film, and in 1936 Mish Mish Effendi, the first Egyptian animated film, before going into film distribution. They quickly became the main distributors of Egyptian films in the Arab world, with offices in Alexandria and Cairo, as well as in Baghdad, Khartoum, Beirut and Damascus. Sélection Behna Films participated in many iconic films in the history of Egyptian cinema, including Assia, Marie-Queen, Ahmed Galal, all the films of the comedy icon Ismail Yassin and those of the composer-actor Mohamed Fawzy, among others.
      </p>
      <p className="py-2 font-ibmSans">
        Sélection Behna Films closed its doors in 1961 following the 1952 revolution and the nationalisation campaign. It was only in 2012, after long legal battles, that Basile and Marie-Claude Behna were able to regain access to Wekalet Behna - the Alexandrian premises of the Sélection Behna Films agency. This 12-room apartment had been abandoned for over 50 years, the archive plagued by moisture, dust, insects and rodents. For years now, Basile and Marie-Claude Behna have researched, and even bought back, their family&apos;s heritage, gathering more than 180 linear metres of archive giving daily accounts of the film production and distribution activity during more than three decades. The archive is stored on shelves in 3 of Wekalet Behna&apos;s 12 rooms.
      </p>
      <p className="py-2 font-ibmSans">
        A collaboration between Wekalet Behna, Community Jameel and ARCHiVe (Factum Foundation and Fondazione Giorgio Cini), the Behna Digital Archive is a digitisation project which has led to the launch of an online platform. The aim of the Behna Digital Archive is to ensure long-term preservation and accessibility of Wekalet Behna&apos;s treasured early 20th century poster collection.
      </p>
      <p className="py-2 font-ibmSans">
        The collection is a rare and precious testimony to the history of the Egyptian cinema&apos;s âge d&apos;or. Born out of a necessity to preserve what is left for future generations, the Behna Digital Archive will also serve as a tool to inspire producers, graphic designers and film lovers.
      </p>

      <div className="w-auto">
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
        <div className="my-4 border-b border-gray-300"></div>
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
