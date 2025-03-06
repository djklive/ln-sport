import Image from "next/image";
import React from "react";
import Header from "../Header";

type HeroSectionProps = {
  title: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <section className="relative flex flex-col justify-center gap-4 bg-gray-800 h-3/5 text-center text-white">
      <Header />
      <Image
        width={1000}
        height={100}
        src="/hero-image.png"
        alt="Football News"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative h-2/3 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold uppercase">{title}</h2>
        <button className="w-fit mt-4 rounded-full bg-orange-500 px-6 py-2">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
