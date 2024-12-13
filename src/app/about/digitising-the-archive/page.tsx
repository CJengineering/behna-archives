import VerticalSpaceDivider from "@/components/verticla-space-divider";
import { AboutParagraph } from "../about-components/AboutParagraph";

import Image from "next/image";
import { Timeline } from "../the-story/story components/Timeline";
import { Quotes } from "./digitising-the-archive components/quotes";
import { AboutSectionContainer } from "../about-components/AboutSectionContainer";
import { AboutTitleSection } from "../about-components/AboutTitleSection";

export default async function DigitisingTheArchive() {
  const data = [
    {
      title: "Challenge",
      content: (
        <div>
          <AboutParagraph>
            Ensure methodologies, techniques and best practices were shared and
            used to digitally record the Behna archive accurately.
          </AboutParagraph>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
        </div>
      ),
    },
    {
      title: "SCANNING",
      content: (
        <div>
          <AboutParagraph>
            For documents up to A3 size, such as photographs and typewritten
            papers, a high-resolution scanner was employed. Larger items,
            including printed and painted posters ranging from 50x70cm to
            260x120cm, were recorded using panoramic composite photography. This
            technique, often employed by Factum Foundation for large cultural
            heritage objects, guarantees accurate colour representation and
            high-resolution surface detail. The process involves taking multiple
            high-resolution images from a single point using a telephoto lens,
            then digitally stitching them together in post-processing to create
            a single large image file, correcting any geometric distortions.
          </AboutParagraph>
          <VerticalSpaceDivider padding={6} />
          <Image
            src={"/digitasingBhena.jpeg"}
            alt={"cairo-baghdad"}
            height={480}
            width={738}
          />
          <VerticalSpaceDivider padding={6} />
          <AboutParagraph>
            Sélections Behna Films participated in the production of many iconic
            films in Egyptian cinema history, including works by Assia Dagher,
            Mary Queeny, Ahmed Galal, comedy icon Ismail Yassin and
            composer-actor Mohamed Fawzi.
          </AboutParagraph>
        </div>
      ),
    },
    {
      title: "POST-PROCESSING",
      content: (
        <div>
          <VerticalSpaceDivider padding={6} />{" "}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
            <Image
              src={"/digitasingBhena.jpeg"}
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
          <AboutParagraph>
            Post-processing involved exporting images in jpg format for quick
            online visualisation and in TIFF format for long-term preservation.
            The panoramic composite photography recording and post-processing
            were conducted by the Factum team, while the scanning and processing
            of other documents were managed by Wekalet Behna, supported by the
            Fondazione Giorgio Cini.
          </AboutParagraph>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "UPLOAD",
      content: (
        <div>
          <VerticalSpaceDivider padding={6} />
          <AboutParagraph>
            The resulting files were uploaded by Community Jameel to the Behna
            Cinema Archive, a digital platform hosting elements from the
            archive, providing essential information for analysing the objects
            and exploring their history.
          </AboutParagraph>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  const quoteText = `ARCHiVe is delighted to have participated in this project which ultimately aimed at digitally preserving this important archive, and sharing its images and content with the world.

  Working together with the team in Alexandria and Community Jameel, this collaboration has been guided by the desire to transmit historical and art historical heritage. We believe that this project represents a meaningful step towards preserving Egypt’s rich cultural and film history and making it accessible for future generations. We believe this project holds significant potential for Behna and researchers into Egypt’s film and social history, and this has been a motivation for dedicating our time and resources to this endeavour. 
  
  - Fondazione Giorgio Cini and Factum Foundation (ARCHiVE)`;
  return (
    <div>
      <div className="m">
        <AboutSectionContainer>
          <VerticalSpaceDivider padding={6} />
          <AboutTitleSection
            heading1="DIGITISING ARCHIVES"
            textCentred
          ></AboutTitleSection>
          <VerticalSpaceDivider padding={6} />
          <Quotes text={quoteText} />
        </AboutSectionContainer>
        <Timeline data={data} />
      </div>
    </div>
  );
}
