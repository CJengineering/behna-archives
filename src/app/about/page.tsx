import Button from "@/components/Button";

import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import LogoCommunity from "@/components/LogoCommunity";
import Link from "next/link";
import { AboutTitleSection } from "./about-components/AboutTitleSection";
import { AboutHeroImage } from "./about-components/AboutHeroImage";
import { AboutParagraph } from "./about-components/AboutParagraph";
import { HorizontalDivider } from "./about-components/HorizontalDivider";
import { AboutGridContainer } from "./about-components/AboutGridContainer";
import { AboutSectionContainer } from "./about-components/AboutSectionContainer";
import AboutSupporters from "./about-components/AboutSupporters";
import VerticalSpaceDivider from "@/components/verticla-space-divider";
import HorizontalContainer from "@/components/horizontal-container";

export default async function About() {
  return (
    <div>
      <VerticalSpaceDivider padding={12} />
      <AboutTitleSection heading1="ABOUT" textCentred></AboutTitleSection>
      <VerticalSpaceDivider padding={12} />
      <AboutSectionContainer>
        <HorizontalContainer limit={830}>
          <AboutParagraph textCentred>
            The Behna Cinema Archive preserves and showcases one of Egypt’s most
            significant cinema collections, dating back to the 1930s and
            belonging to the legendary production and distribution house, Behna
            Films. This initiative, undertaken in partnership by Wekalet Behna,
            Community Jameel, Fondazione Giorgio Cini and Factum Foundation,
            aims to archive and digitise posters and historical documents for
            future generations.
          </AboutParagraph>
        </HorizontalContainer>
        <VerticalSpaceDivider padding={6} />
        <AboutSupporters />©
      </AboutSectionContainer>
      <VerticalSpaceDivider padding={6} />
      <AboutSectionContainer>
        <div className=" flex  ">
          <div className="pr-12 w-2/3 ">
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
          <div className="  w-[1px] bg-gray-300"></div>
          <div className=" pl-12 w-1/3">
            <h2 className="text-xl md:text-3xl text-black font-bold plexSans mb-2">
              {" "}
              The story
            </h2>
            <span className=" italic text-gray-500">
              Preserving Egyptian cinema’s cultural heritage
            </span>
            <br></br>
            <Link
              href={"/about/the-story"}
              className="italic hover:cursor-pointer underline text-gray-500 hover:text-gray-400"
            >
              Read More{" "}
            </Link>
          </div>
        </div>
      </AboutSectionContainer>

      <AboutSectionContainer>
        <HorizontalDivider />
        <VerticalSpaceDivider padding={6} />
        <div className=" flex  ">
          <div className=" pr-12 w-[60%]">
            <h2 className="text-xl md:text-3xl text-black font-bold plexSans mb-2">
           
              The Power of Archives
            </h2>
            <span className=" italic text-gray-500">
              Preserving Egyptian cinema’s cultural heritage
            </span>
            <br></br>
            <Link
              href={"/about"}
              className="italic hover:cursor-pointer underline text-gray-500 hover:text-gray-400"
            >
              Read More
            </Link>
          </div>
          <div className="  w-[1px] bg-gray-300"></div>
          <div className="pl-12 w-[40%] ">
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/2_AAMTFC_1946_Hadiya.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
        </div>
      </AboutSectionContainer>
      <AboutSectionContainer>
        <HorizontalDivider />
        <VerticalSpaceDivider padding={6} />
        <div className=" flex  ">
          <div className="pr-12 w-2/3 ">
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
          <div className="  w-[1px] bg-gray-300"></div>
          <div className=" pl-12 w-1/3">
            <h2 className="text-xl md:text-3xl text-black font-bold plexSans mb-2">
              Digitising the archive
            </h2>
            <span className=" italic text-gray-500">
              Preserving Egyptian cinema’s cultural heritage
            </span>
            <br></br>
            <Link
              href={"/about/digitising-the-archive"}
              className="italic hover:cursor-pointer underline text-gray-500 hover:text-gray-400"
            >
              Read More{" "}
            </Link>
          </div>
        </div>
      </AboutSectionContainer>
    </div>
  );
}
