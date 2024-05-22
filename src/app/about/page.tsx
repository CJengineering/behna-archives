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
      <div className="relative h-[20vh] md:h-[40vh] items-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex items-center justify-center h-full z-20">
            <h1 className="text-center text-3xl md:text-5xl text-black font-bold plexSans">
              About
            </h1>
          </div>
        </div>
       
      </section>

      <section className=" max-w-[1700px] mx-auto ">
    
      <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2 md:gap-4 md:align-middle">
    <div className="text-column">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 font-ibmSans">
        What are Behna Archives?
      </h2>
      <p className="py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ullam placeat, ab deleniti porro expedita cumque? Nesciunt, non exercitationem sapiente iste pariatur placeat tempora accusamus optio sed quas quos similique.
      </p>
      <p className="py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque a, iure architecto molestiae harum dignissimos, suscipit necessitatibus impedit obcaecati recusandae voluptatum esse deserunt magni quam corporis? Est, magnam sit.
      </p>
      <p className="py-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ipsum placeat laudantium, nisi, maiores illum tempora fugiat nulla officia dicta a ut consequuntur, libero hic? Atque quaerat esse quas ratione.
      </p>
      <div className="w-auto">
      </div>
    </div>
    <div className="column-image hidden md:flex justify-end">
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
      <h2 className="text-3xl font-bold mb-4 text-gray-900 font-ibmSans">
        Supported by
      </h2>
  <div className="flex flex-col md:flex-row justify-start space-x-12">
    <Image src={cjLogo} alt="" className="w-48" />
    <Image src={factumLogo} alt="" className="py-2 w-64" />
    <Image src={fonazione} alt="" className="py-2 w-52" />
    <Image src={behnaLogo} alt="" className="py-2 w-36" />
  </div>
</section>
    </div>
  );
}
