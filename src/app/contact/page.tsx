import ContactForm from "@/components/ContactForm";
import cjLogo from "../../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../../public/svg/WEKALAT_BEHNA_LOGO.svg";

import Image from "next/image";

export default async function Contact() {
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
              Contact
            </h1>
          </div>
        </div>
      </section>

      <section className=" max-w-[980px] mx-auto ">
      
        <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-2">
          <div className="text-colmn">
          <ContactForm></ContactForm>
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
     
    </div>
  );
}
