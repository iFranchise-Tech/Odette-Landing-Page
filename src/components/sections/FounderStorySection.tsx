import Image from "next/image";

const founderStoryImage = "/images/brand/odette-founders.jpg";

export function FounderStorySection() {
  return (
    <section className="odette-founders" aria-label="Odette founders Mamta Roy and Amit Roy">
      <Image
        src={founderStoryImage}
        alt="Odette founders Mamta Roy and Amit Roy with their fashion philosophy"
        width={2560}
        height={1360}
        sizes="100vw"
        unoptimized
        className="odette-founders__image"
      />
    </section>
  );
}
