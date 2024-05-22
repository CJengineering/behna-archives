import ContactForm from "@/components/ContactForm";
import cjLogo from "../../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../../public/svg/WEKALAT_BEHNA_LOGO.svg";
import Image from "next/image";

export default async function Contact() {
  return (
    <div>
      <section className="">
      <div className="relative h-[20vh] md:h-[40vh] items-center">
          <div className="absolute inset-0"></div>
          <div className="relative flex items-center justify-center h-full z-20">
            <h1 className="text-center text-3xl md:text-5xl text-black font-bold plexSans">
              Contact
            </h1>
          </div>
        </div>
       
      </section>
      <section className=" max-w-[980px] mx-auto">
      
        <div className="grid grid-cols-1 px-4 py-8 md:grid-cols-1">
          <div className="text-colmn">
          <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </div>
  );
}
