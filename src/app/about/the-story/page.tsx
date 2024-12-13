import VerticalSpaceDivider from "@/components/verticla-space-divider";
import { AboutParagraph } from "../about-components/AboutParagraph";
import { Timeline } from "./story components/Timeline";
import Image from "next/image";

export default async function TheStoryPage() {
  const data = [
    {
      title: "1920",
      content: (
        <div>
          <AboutParagraph>
            The Behna Cinema Archive preserves and showcases one of Egypt’s most
            significant cinema collections, dating back to the 1930s and
            belonging to the legendary production and distribution house, Behna
            Films. This initiative, undertaken in partnership by Wekalet Behna,
            Community Jameel, Fondazione Giorgio Cini and Factum Foundation,
            aims to archive and digitise posters and historical documents for
            future generations.
          </AboutParagraph>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
        </div>
      ),
    },
    {
      title: "1932",
      content: (
        <div>
          <AboutParagraph>
            In 1932, the Behna brothers co-produced ‘Onshoudat Al-Fouad’, with
            Nahas Sphynx Film, the first Egyptian musical film, and later in
            1936, they launched into film distribution with the release of the
            Egyptian animated film ‘Mish Mish Effendi.’ The company quickly
            became the main distributors of Egyptian films in the Arab world,
            with offices in Alexandria, Cairo, Baghdad, Khartoum, Beirut and
            Damascus.
          </AboutParagraph>
          <VerticalSpaceDivider padding={6} />
          <Image
            src={
              "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
            }
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
      title: "1952",
      content: (
        <div>
          <VerticalSpaceDivider padding={6} />{" "}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />{" "}
            <Image
              src={
                "https://storage.googleapis.com/behna-archives/37_UAF_1947_Cairo%20Baghdad.webp"
              }
              alt={"cairo-baghdad"}
              height={480}
              width={738}
            />
          </div>
          <AboutParagraph>
            Following the 1952 revolution and the widespread campaign of
            nationalisation, Sélections Behna Films was compelled to cease
            operations in 1961. After prolonged legal battles, the heirs to this
            former cinematic empire, Basile Behna and his sisters, sought to
            reclaim the assets of their expropriated company. During this time,
            Basile Behna, an art collector who possessed a diverse collection,
            embarked on building his own cinema archive that chronicled his
            family’s rich heritage. He meticulously acquired pieces from antique
            markets and other collectors to reflect the long and storied history
            of Sélection Behna Films.
          </AboutParagraph>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <VerticalSpaceDivider padding={6} />
          <AboutParagraph>
            In 2021, 63,000 items including photographs, film posters and
            records stored in the former Séléction Behna Films offices in
            Alexandria — now the modern-day premises of Wekalet Behna — were at
            risk of loss due to limited preservation systems, high temperatures
            and humidity.
          </AboutParagraph>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <VerticalSpaceDivider padding={6} />
          <AboutParagraph>
            Together with Wekalet Behna as well as conservation and digitisation
            specialists, Factum Foundation and Fondazione Giorgio Cini
            (ARCHiVe), Community Jameel launched an project to digitise and
            preserve Basile Behna’s treasured early 20th-century poster
            collection. ARCHiVe’s digitisation team delivered training workshops
            in Alexandria to share knowledge, best practices and techniques with
            Wekalet Behna’s team to help digitise cinema posters, photographs
            and historical documents.
          </AboutParagraph>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <VerticalSpaceDivider padding={6} />
          <AboutParagraph>
            The joint effort to digitise the archive resulted in the creation of
            the Behna Cinema Archive, a digital platform which offers a rare and
            precious testimony to the golden era of Egyptian cinema, and
            provides accessible, essential information for analysing the objects
            and exploring their history.
          </AboutParagraph>

          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="m">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            The story
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            The Behna Cinema Archive celebrates, preserves and shares digitised
            documents from Egyptian cinema history (1930-2000). It is an open,
            accessible platform showcasing cinema posters belonging to one of
            Egypt’s legendary production and distribution houses, Behna Films. A
            collaboration between Wekalet Behna, Community Jameel, Fondazione
            Giorgio Cini and Factum Foundation, this digital archive offers a
            precious testimony to the golden era of Egyptian cinema and aims to
            preserve, and make accessible, Egyptian cinema history for future
            generations.
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}
