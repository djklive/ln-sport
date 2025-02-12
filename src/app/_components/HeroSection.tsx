import React from "react";

type HeroSectionProps = {
  title: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <section className="relative bg-gray-900 py-10 text-center text-white">
      <img
        src="/hero-image.jpg"
        alt="Football News"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative">
        <h2 className="text-3xl font-bold">{title}</h2>
        <button className="mt-4 rounded-full bg-orange-500 px-6 py-2">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
