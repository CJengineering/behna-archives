import Image from "next/image";

export function AboutHeroImage() {
  return (
    <div className="column-image hidden md:block">
      <Image
        src="https://storage.googleapis.com/behna-archives/267_GS_1955_For%20the%20Sake%20of%20Love.webp"
        alt=""
        width={1200}
        height={400}
      />
    </div>
  );
}
