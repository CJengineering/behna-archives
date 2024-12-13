import Link from "next/link";
import Image from "next/image";
import cjLogo from "../../../../public/svg/CJ_LOGO_ENGLISH_BLACK_SVG.svg";
import factumLogo from "../../../../public/svg/FACTUM_FONDATION.svg";
import fonazione from "../../../../public/svg/FONDAZIONE_CINI.svg";
import behnaLogo from "../../../../public/svg/WEKALAT_BEHNA_LOGO.svg";

export default function AboutSupporters() {
  return (
    <>
 
      <div className="flex flex-col justify-start items-start md:flex-row md:space-x-12">
        <Link href="https://www.behna.org/en/" target="_blank">
          <Image
            src={behnaLogo}
            alt="BEHNA Logo"
            className="py-4 w-36 transition-opacity duration-300 hover:opacity-60"
          />
        </Link>

        <Link href="https://www.communityjameel.org/" target="_blank">
          <Image
            src={cjLogo}
            alt="Community Jameel Logo"
            className="py-4 w-48 transition-opacity duration-300 hover:opacity-60"
          />
        </Link>

        <Link href="https://factumfoundation.org/" target="_blank">
          <Image
            src={factumLogo}
            alt="FACTUM Logo"
            className="py-4 w-64 transition-opacity duration-300 hover:opacity-60"
          />
        </Link>

        <Link href="https://www.cini.it/" target="_blank">
          <Image
            src={fonazione}
            alt="Fonazione Cini Logo"
            className="py-4 w-52 transition-opacity duration-300 hover:opacity-60"
          />
        </Link>
      </div>
    </>
  );
}
