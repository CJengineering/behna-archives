interface AboutTitleSectionProps {
  heading1: string;
  subHeading?: string;
  textCentred?: boolean;
}

export function AboutTitleSection({ heading1, subHeading, textCentred }: AboutTitleSectionProps) {
  return (
    <section className="relative flex items-center justify-center ">
      <div
        className={`relative px-4 max-w-[1080px] z-20 ${
          textCentred ? "text-center" : "text-left"
        }`}
      >
        <h1 className="text-3xl md:text-5xl text-black font-bold plexSans mb-2">
          {heading1}
        </h1>
        {subHeading && (
          <span className="text-xl font-bold m-0 text-gray-500 font-ibmSans">
            {subHeading} 
            
          </span>
        )}
      </div>
    </section>
  );
}
