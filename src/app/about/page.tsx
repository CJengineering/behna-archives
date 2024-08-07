import Button from "@/components/Button";
import cjLogo from "../../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../../public/svg/WEKALAT_BEHNA_LOGO.svg";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import LogoCommunity from "@/components/LogoCommunity";
import Link from "next/link";

export default async function About() {
  return (
    <div>
      <section className="">
        <div className="relative py-12 px-6 md:py-32 items-center">
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
              Moving images captivated the world in the early 1900s, marking the
              emergence of cinema as a global cultural phenomenon.
            </p>
            <p className="py-2 font-ibmSans">
              In the 1920s, Alexandria saw the founding of Sélection Behna Films
              by two brothers, Michael and George Behna, just as the city was
              becoming a centre for Egypt’s burgeoning film industry. An
              historic centre of scholarship, trade, and culture since the
              Ptolemaic dynasty, Alexandria regained its status as the pride of
              the Mediterranean and a hub for the arts following a cultural
              renaissance in the 19th century. This thriving trading post,
              inhabited by a cosmopolitan mosaic of cultures, became a focal
              point for the emerging film industry.
            </p>
            <p className="py-2 font-ibmSans">
              In 1932, the Behna brothers produced &quot;Onshoudat
              al-Fouad,&quot; the first Egyptian musical film, and in 1936
              &quot;Mish Mish Effendi,&quot; the first Egyptian animated film,
              before transitioning to film distribution. They quickly became the
              main distributors of Egyptian films in the Arab world, with
              offices in Alexandria, Cairo, Baghdad, Khartoum, Beirut and
              Damascus. Sélection Behna Films participated in many iconic films
              in the history of Egyptian cinema, including works by Assia,
              Marie-Queen, Ahmed Galal, comedy icon Ismail Yassin and
              composer-actor Mohamed Fawzy.
            </p>
            <p className="py-2 font-ibmSans">
              Following the 1952 revolution and the widespread campaign of
              nationalisation, Sélection Behna Films was forced to close its
              doors in 1961. It was only in 2012, after long legal battles, that
              the heirs to this former cinematic empire, Basile and Marie-Claude
              Behna, were able to regain access to Wekalet Behna, the
              Alexandrian premises of the Sélection Behna Films agency.
            </p>
            <p className="py-2 font-ibmSans">
              This 12-room apartment had been abandoned for over 50 years, with
              the archive plagued by moisture, dust, insects and rodents. For
              years, Basile and Marie-Claude Behna have researched and even
              repurchased their family&apos;s heritage, gathering more than 180
              linear metres of archive material, providing daily accounts of
              film production and distribution activity over more than three
              decades.
            </p>
            <p className="py-2 font-ibmSans">
              A collaboration between Wekalet Behna, Community Jameel and
              ARCHiVe (Factum Foundation and Fondazione Giorgio Cini), the Behna
              Digital Archive began as a digitisation project to preserve
              Wekalet Behna&apos;s treasured early 20th-century poster
              collection. Today it is a platform dedicated to celebrating and
              preserving Egyptian cinema history.
            </p>
            <p className="py-2 font-ibmSans">
              The collection offers a rare and precious testimony to the golden
              era of Egyptian cinema. As an accessible, digital archive, it aims
              to serve as a tool for film lovers, producers, researchers and
              graphic designers globally. decades.
            </p>

            <div className="w-auto"></div>
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
      <section className=" max-w-[1700px] mx-auto ">
        <div className="column-image hidden md:block md:align-top">
            <img
              src="https://storage.googleapis.com/behna-archives/267_GS_1955_For%20the%20Sake%20of%20Love.webp"
              alt=""
              className="self-end"
            />
          </div>
        <div className="grid grid-cols-1 px-4 pb-8 md:grid-cols-1 md:gap-12 md:align-top">
          <div className="text-column">
            <h2 className="text-3xl font-bold m-0 text-gray-900 font-ibmSans mb-2">
              <span> Digitising the golden era of Egyptian cinema</span>
              <br></br>
              <span className="text-xl  m-0 text-gray-500 font-ibmSans">
                by the ARCHiVe team at the Cini and Factum Foundation
              </span>
            </h2>

            {/* <h2 className="text-3xl font-bold mb-4 text-gray-900 font-ibmSans">
        What are Behna Archives?
      </h2> */}
            <p className="py-2 font-ibmSans">
              The ARCHiVe team at the Fondazione Giorgio Cini and Factum
              Foundation are delighted to have participated in this
              collaborative project with Wekalet Behna and Community Jameel. We
              believe this project holds significant potential for Behna and
              researchers into Egypt&rsquo;s film and social history, and this
              has been a motivation for dedicating our time and resources to
              this endeavour.
            </p>
            <p className="py-2 font-ibmSans">
              Our joint effort aimed to record, preserve, and disseminate the
              valuable Behna Archive. The first step involved a training
              workshop in Alexandria, conducted by two members of Factum
              Foundation. Our goal was to share methodologies, techniques, and
              best practices with Behna&rsquo;s team to digitally record the
              archive accurately.
            </p>
            <p className="py-2 font-ibmSans">
              The challenge was to ensure the digitisation process used the
              appropriate recording methods. For documents up to A3 size, such
              as photographs and typewritten papers, a high-resolution scanner
              has been employed. Larger items, including printed and painted
              posters ranging from 50x70cm to 260x120cm, were recorded using
              panoramic composite photography. This technique, often employed by
              Factum Foundation for large cultural heritage objects, guarantees
              accurate colour representation and high-resolution surface detail.
              The process involves taking multiple high-resolution images from a
              single point using a telephoto lens, then digitally stitching them
              together in post-processing to create a single large image file,
              correcting any geometric distortions.
            </p>
            <p className="py-2 font-ibmSans">
              Post-processing involved exporting images in jpg format for quick
              online visualisation and in TIFF format for long-term
              preservation. The panoramic composite photography recording and
              post-processing were conducted by the Factum team, while the
              scanning and processing of other documents were managed by Wekalet
              Behna, supported by the Fondazione Giorgio Cini.
            </p>
            <p className="py-2 font-ibmSans">
              The resulting files have been uploaded by Community Jameel to a
              digital platform hosting elements from the archive, providing
              essential information for analysing the objects and exploring
              their history. The Behna Archive is a rare and valuable testament
              to not only the Behna family&rsquo;s heritage and activities but
              also to Egyptian cinema and history in general. ARCHiVe is
              delighted to have participated in this project which ultimately
              aimed at digitally preserving this important archive, and sharing
              its images and content with the world.
            </p>
            <p className="py-2 font-ibmSans">
              Working together with the team in Alexandria and Community Jameel,
              this collaboration has been guided by the desire to transmit
              historical and art historical heritage. We believe that this
              project represents a meaningful step towards preserving
              Egypt&rsquo;s rich cultural and film history and making it
              accessible for future generations.
            </p>

            <div className="w-auto"></div>
          </div>
       
        </div>
        <div className="my-4 border-b border-gray-300"></div>
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
