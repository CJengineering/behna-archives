import Button from "@/components/Button";


import cjLogo from "../../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../../public/svg/WEKALAT_BEHNA_LOGO.svg";


import Image from "next/image";


import LogoCommunity from "@/components/LogoCommunity";

export default async function About() {

  return (
    <div>
      <section className=" ">
        <div className="relative h-[40vh]">
          <img
            src="https://storage.googleapis.com/behna-archives/00_THUMBNAILS/134_LC_1952_Time%20of%20Wonders_THUMBNAIL.webp"
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-20"></div>
          <div className="relative flex items-center justify-center h-full z-20">
            <h1 className="text-white text-center md:w-1/4 text-xl md:text-4xl font-bold font-ibmSans">
              About
            </h1>
          </div>
        </div>
       
      </section>

      <section className=" max-w-[980px] mx-auto ">
    
        <div className="grid grid-cols-1 px-4  py-8 md:grid-cols-2">
          <div className="text-colmn mr-4">
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
      <section className="  md:w-[980px] mx-auto py-4">
      <h2 className="p-4 font-ibmMono font-semibold ">Sorted by</h2>
        <div className="flex p-4 flex-col md:flex-row space-x-6">
          <Image src={cjLogo} alt="" className=" py-2 w-48"  />

          <Image src={factumLogo} alt="" className=" py-2 w-48" />
          <Image src={fonazione} alt="" className="w-48 py-2" />
          <Image src={behnaLogo} alt="" className="w-48 py-2" />
        </div>
      </section>
    </div>
  );
}
